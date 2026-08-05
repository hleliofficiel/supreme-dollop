-- 1. Ensure the features and theme columns exist
ALTER TABLE public.plans ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '[]'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS theme TEXT DEFAULT 'cyan';

-- 2. Update the Pro Plan (Edit price and features here at any time)
UPDATE public.plans
SET 
    price = 300.00, 
    duration_days = 36500, -- "for life" equivalent
    description = 'Pro Plan (Limited Offer)',
    features = '[
        "All Advanced QR Types & Premium Exports",
        "Custom Colors, Gradients & Logos",
        "Unlimited Generations & Cloud Sync",
        "Customize app theme and save to database",
        "Exclusive features and updates for paid plans",
        "Direct access and chat with the AI agent"
    ]'::jsonb
WHERE name = 'Pro';

-- 3. Update the Free Plan (Price is typically 0.00)
UPDATE public.plans
SET 
    price = 0.00, 
    duration_days = 36500, -- "Forever"
    description = 'Guest / Free',
    features = '[
        "Basic QR Codes (Text, URL)",
        "Standard Black & White styles",
        "Limited to 5 generations per day",
        "Registration required for history"
    ]'::jsonb
WHERE name = 'Free';
