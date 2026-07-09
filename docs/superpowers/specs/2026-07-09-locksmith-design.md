# Locksmith Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `locksmith-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | Keyline Locksmith |
| **Tagline** | 24/7 Lockouts · Locks · Keys · Security |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2005 |
| **Owner** | Luis Mercado |
| **License** | Licensed Locksmith · Bonded & Insured |
| **Guarantee** | 24/7 Emergency Response · Workmanship Guaranteed |
| **Social proof** | 4.9★, 3,000+ reviews, 20,000+ calls answered |
| **Accent hex** | `#0f766e` (teal) as `$orange`; slate accent `#475569` |
| **Phone** | (254) 820-2020 / `tel:+12548202020` |
| **Email** | hello@keylinelocksmith.com |
| **Domain** | keylinelocksmith.com |
| **Address** | 1201 Speight Ave, Waco, TX 76706 |

## Services (6)

| Slug | Title |
|------|--------|
| `emergency-lockout` | Emergency Lockout |
| `rekey-lock-change` | Rekey & Lock Change |
| `smart-locks` | Smart Lock Installation |
| `car-keys` | Car Keys & Fobs |
| `commercial-access` | Commercial Access Control |
| `safe-services` | Safe Services |

## Industries (3)

| Slug | Title |
|------|--------|
| `property-management` | Property Management |
| `auto-dealers` | Auto Dealers & Fleets |
| `retail-security` | Retail Security |

## Blogs (3)

1. `locked-out-what-to-do-first`
2. `rekey-vs-replace-locks`
3. `smart-locks-for-rentals-texas`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #0f766e`, `$lightorange: #475569`, `$darkorange: #0d5c56`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#0f766e`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: Keyline Locksmith throughout
