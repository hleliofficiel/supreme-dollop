-- Run this SQL in your Supabase SQL Editor

-- 1. Add usage tracking, expiration, and theme preference columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS daily_usage_count INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_usage_date DATE DEFAULT CURRENT_DATE,
ADD COLUMN IF NOT EXISTS plan_expiration_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS plan_status TEXT DEFAULT 'active',
ADD COLUMN IF NOT EXISTS theme TEXT DEFAULT 'cyan';

-- 2. Create a plans table for pricing
CREATE TABLE IF NOT EXISTS public.plans (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    duration_days INT NOT NULL DEFAULT 30,
    description TEXT
);

-- Insert default plans
INSERT INTO public.plans (name, price, duration_days, description)
VALUES 
    ('Free', 0.00, 3650, 'Basic free plan with 5 generations per day'),
    ('Pro', 0.00, 30, 'Pro plan (Free Promo)'),
    ('Premium', 9.99, 30, 'Premium plan requiring support contact')
ON CONFLICT DO NOTHING;

-- 3. Create a function to reset daily usage for users automatically
CREATE OR REPLACE FUNCTION reset_daily_usage()
RETURNS void AS $$
BEGIN
  UPDATE public.profiles
  SET daily_usage_count = 0, last_usage_date = CURRENT_DATE
  WHERE last_usage_date < CURRENT_DATE;
END;
$$ LANGUAGE plpgsql;

-- (Optional) You can set up a pg_cron job in Supabase to run this daily, or just check it on the client-side.
