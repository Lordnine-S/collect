import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://hutswcrqtbkbuwasifum.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_BOgoRPamrKzC2dJfgwgTrQ_xxB0yT4a";
const BOSS_SUPABASE_URL = "https://ttgnoqehlupllpfyhuff.supabase.co";
const BOSS_SUPABASE_ANON_KEY = "sb_publishable_nVsvYqo3fjX_RHQO2in5XA_F9J0bM27";

export const APP_SETTINGS_TABLE = "app_settings";
export const ADMIN_PASSWORD_KEY = "admin_password";
export const DISTRIBUTION_BOSS_RULES_TABLE = "distribution_boss_rules";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const bossSupabase = BOSS_SUPABASE_URL && BOSS_SUPABASE_ANON_KEY
  ? createClient(BOSS_SUPABASE_URL, BOSS_SUPABASE_ANON_KEY)
  : null;
