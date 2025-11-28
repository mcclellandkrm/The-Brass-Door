# SEO Plan for The Brass Door Bar & Restaurant

## Executive Summary

This comprehensive SEO plan is designed to position The Brass Door as the premier bar and restaurant destination in Carlingford, driving local foot traffic, increasing reservations, and building brand authority in the Irish hospitality scene.

**Primary Goals:**
- Rank #1 for "bar Carlingford" and "restaurant Carlingford"
- Achieve first-page rankings for cocktail-related searches in the region
- Drive 500+ monthly organic visitors within 6 months
- Increase direct reservations by 40% through organic search

---

## 1. Technical SEO Foundation

### 1.1 Core Web Vitals Optimization

**Priority: HIGH**

- **Largest Contentful Paint (LCP):** Target < 2.5s
  - Optimize hero video compression (keep under 5MB)
  - Implement lazy loading for below-fold images
  - Use modern image formats (WebP for photos, AVIF where supported)

- **First Input Delay (FID):** Target < 100ms
  - Already optimized with Vite's code splitting
  - Defer non-critical JavaScript

- **Cumulative Layout Shift (CLS):** Target < 0.1
  - Set explicit dimensions for all images
  - Reserve space for lazy-loaded content

**Implementation:**
```bash
# Image optimization tools
npm install vite-plugin-image-optimizer
npm install @vitejs/plugin-legacy
```

### 1.2 Mobile Optimization

**Priority: HIGH**

- Fully responsive design (already implemented)
- Touch-friendly buttons (min 44x44px)
- Fast mobile loading (< 3s)
- Mobile-first indexing ready

### 1.3 Structured Data (Schema.org)

**Priority: HIGH**

Implement JSON-LD structured data for:

```json
{
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "The Brass Door Bar & Restaurant",
  "image": [
    "https://thebrassdoor.ie/images/exterior.jpg",
    "https://thebrassdoor.ie/images/interior.jpg"
  ],
  "@id": "https://thebrassdoor.ie",
  "url": "https://thebrassdoor.ie",
  "telephone": "+353-42-XXX-XXXX",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Street",
    "addressLocality": "Carlingford",
    "addressRegion": "Co. Louth",
    "postalCode": "A91 XXXX",
    "addressCountry": "IE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 54.0397,
    "longitude": -6.1894
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "16:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "12:00",
      "closes": "00:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "12:00",
      "closes": "23:00"
    }
  ],
  "servesCuisine": "Irish, Contemporary",
  "hasMenu": "https://thebrassdoor.ie/menu",
  "acceptsReservations": "True"
}
```

**Additional Schemas to Implement:**
- **Restaurant** (duplicate with Bar for broader coverage)
- **Event** (for Friday live music nights)
- **MenuItem** (for signature cocktails)
- **Review/AggregateRating** (once reviews are collected)

### 1.4 Meta Tags & Open Graph

**Every page needs:**

```html
<!-- Primary Meta Tags -->
<title>The Brass Door Bar & Restaurant | Craft Cocktails & Live Music in Carlingford</title>
<meta name="title" content="The Brass Door Bar & Restaurant | Craft Cocktails & Live Music in Carlingford">
<meta name="description" content="Experience handcrafted cocktails, perfect pints, and live music every Friday at The Brass Door. Carlingford's premier bar featuring stone walls, brass bar top, and wood-burning fire.">
<meta name="keywords" content="cocktail bar Carlingford, restaurant Carlingford, live music Carlingford, craft cocktails Ireland, The Brass Door">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://thebrassdoor.ie/">
<meta property="og:title" content="The Brass Door Bar & Restaurant | Craft Cocktails & Live Music">
<meta property="og:description" content="Experience handcrafted cocktails, perfect pints, and live music every Friday in the heart of Carlingford.">
<meta property="og:image" content="https://thebrassdoor.ie/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://thebrassdoor.ie/">
<meta property="twitter:title" content="The Brass Door Bar & Restaurant | Craft Cocktails & Live Music">
<meta property="twitter:description" content="Experience handcrafted cocktails, perfect pints, and live music every Friday in the heart of Carlingford.">
<meta property="twitter:image" content="https://thebrassdoor.ie/images/twitter-image.jpg">

<!-- Geo Tags -->
<meta name="geo.region" content="IE-LH" />
<meta name="geo.placename" content="Carlingford" />
<meta name="geo.position" content="54.0397;-6.1894" />
<meta name="ICBM" content="54.0397, -6.1894" />
```

---

## 2. Local SEO Strategy

### 2.1 Google Business Profile

**Priority: CRITICAL**

**Immediate Actions:**
1. Claim/verify Google Business Profile
2. Complete 100% of profile information
3. Select categories:
   - Primary: Bar
   - Secondary: Restaurant, Cocktail Bar, Irish Restaurant, Live Music Venue
4. Add business hours (including special holiday hours)
5. Upload minimum 20 high-quality photos:
   - Exterior (with signage visible)
   - Interior (brass bar, fireplace, stone walls)
   - Cocktails (all signature drinks)
   - Live music events
   - Staff in action
   - Menu items
6. Enable reservations through profile
7. Add menu link
8. Add attributes:
   - Outdoor seating (if applicable)
   - Live music: Yes
   - Cocktail bar: Yes
   - Cozy atmosphere
   - Good for groups

**Ongoing:**
- Post weekly updates (new cocktails, events, specials)
- Respond to ALL reviews within 24 hours
- Upload photos every week
- Use Google Q&A proactively

### 2.2 Local Citations

**Priority: HIGH**

**Irish Directories (Priority):**
1. **Golden Pages** (goldenpages.ie) - Critical
2. **LocalPages.ie** - Critical
3. **YourLocal.ie**
4. **IrishTimes.com** business directory
5. **Ireland.com** - Tourism Ireland
6. **DiscoverIreland.ie** - Fáilte Ireland
7. **TripAdvisor.ie** - Critical for hospitality
8. **Yelp.ie**
9. **Four Square**
10. **Facebook Business**

**Hospitality-Specific:**
11. **OpenTable** (if taking online reservations)
12. **TheFork.ie** (ResDiary)
13. **Bookatable.ie**
14. **EatOut.ie**
15. **RestaurantsOfIreland.ie**

**Regional Tourism:**
16. **IrishEastCoast.ie**
17. **VisitLouth.ie**
18. **CooleyCamino.ie** (Carlingford is on the route)
19. **CarlingfordIreland.com**
20. **IrishTrails.ie**

**NAP Consistency:**
Ensure Name, Address, Phone are IDENTICAL across all citations:
```
The Brass Door Bar & Restaurant
[Exact Street Address]
Carlingford, Co. Louth, Ireland
+353 XX XXX XXXX
```

### 2.3 Local Link Building

**Priority: MEDIUM**

**Opportunities:**
- Carlingford Tourism Association (link exchange)
- Local hotel websites (partnership links)
- Cooley Peninsula tourism sites
- Irish food & drink bloggers (outreach)
- Local news coverage (Irish Times, Louth News)
- Sponsorship of local events
- Collaborations with Irish distilleries/breweries

---

## 3. On-Page SEO

### 3.1 Primary Target Keywords

**High Priority (Month 1-3):**
1. "cocktail bar Carlingford" (100-500 searches/mo)
2. "bar Carlingford" (500-1K searches/mo)
3. "restaurant Carlingford" (500-1K searches/mo)
4. "live music Carlingford" (100-500 searches/mo)
5. "pubs Carlingford" (100-500 searches/mo)

**Secondary Keywords (Month 4-6):**
6. "best cocktails Louth"
7. "bars near me" (location-based)
8. "where to drink in Carlingford"
9. "Carlingford nightlife"
10. "craft cocktails Ireland"

**Long-Tail Keywords (Ongoing):**
11. "best Guinness in Carlingford"
12. "cocktail bars with live music Ireland"
13. "romantic bars Carlingford"
14. "whisky bar Cooley Peninsula"
15. "where to eat in Carlingford"

### 3.2 Content Strategy

**Phase 1: Essential Pages (Launch)**

1. **Homepage**
   - H1: "The Brass Door Bar & Restaurant | Carlingford"
   - Target: Brand + "bar Carlingford"
   - Word count: 400-600 words
   - Include: USPs, atmosphere description, location

2. **Cocktails Menu Page**
   - H1: "Signature Cocktails | Handcrafted in Carlingford"
   - Target: "cocktail bar Carlingford", "craft cocktails"
   - Word count: 800-1000 words
   - Each cocktail gets H2 with description (100-150 words)
   - Include: Ingredients, tasting notes, pairing suggestions

3. **Food Menu Page**
   - H1: "Restaurant Menu | Fresh Irish Cuisine"
   - Target: "restaurant Carlingford", "where to eat Carlingford"
   - Word count: 600-800 words
   - Sections for starters, mains, desserts

4. **Live Music Page**
   - H1: "Live Music Every Friday | The Brass Door"
   - Target: "live music Carlingford", "nightlife Carlingford"
   - Word count: 500-700 words
   - Upcoming events calendar
   - Past performers

5. **About Page**
   - H1: "About The Brass Door | Our Story"
   - Target: Brand queries, "best bar Carlingford"
   - Word count: 600-800 words
   - Include: History, team, philosophy, awards/recognition

6. **Contact/Reservations**
   - H1: "Visit Us | Reservations & Contact"
   - Target: "reservations Carlingford", navigational
   - Word count: 300-400 words
   - Embedded map, contact form, directions

**Phase 2: Blog/Content Hub (Month 2+)**

**Monthly Blog Topics:**
1. "The Art of Crafting the Perfect Mona Lisa Cocktail"
2. "5 Irish Whiskies You Must Try at The Brass Door"
3. "How to Pour the Perfect Pint of Guinness"
4. "Behind the Brass Bar: Meet Our Bartenders"
5. "The History of Cocktails in Ireland"
6. "Carlingford's Best Kept Secret: Live Music Fridays"
7. "Seasonal Cocktail Menu: What's New This Month"
8. "Food Pairing Guide: Cocktails & Irish Cuisine"
9. "A Guide to Carlingford: Things to Do Before Drinks"
10. "The Story Behind Our Wood-Burning Fire"

**Content Guidelines:**
- Minimum 1,000 words per blog post
- Include high-quality images (properly optimized)
- Internal linking to menu pages
- Call-to-action for reservations
- Shareable content (quotes, infographics)
- Local keywords naturally integrated

### 3.3 URL Structure

**Best Practices:**
```
https://thebrassdoor.ie/
https://thebrassdoor.ie/cocktails
https://thebrassdoor.ie/cocktails/mona-lisa
https://thebrassdoor.ie/menu
https://thebrassdoor.ie/live-music
https://thebrassdoor.ie/events
https://thebrassdoor.ie/about
https://thebrassdoor.ie/contact
https://thebrassdoor.ie/blog
https://thebrassdoor.ie/blog/perfect-guinness
```

**Rules:**
- Short, descriptive, keyword-rich
- Lowercase only
- Hyphens (not underscores)
- No special characters
- Logical hierarchy

---

## 4. Content Marketing & Link Building

### 4.1 Digital PR Opportunities

**Local Media:**
- Press release: Grand opening/relaunch
- Unique angle: "Carlingford's Most Instagrammable Bar"
- Seasonal stories: "Christmas cocktails", "Summer terrace"
- Human interest: "Local family business", "Staff stories"

**National Media:**
- Irish Times Food & Drink section
- Irish Independent Weekend Magazine
- Lovin Dublin (regional expansion)
- Journal.ie lifestyle section
- RTÉ Nationwide (TV feature)

### 4.2 Influencer Partnerships

**Target Influencers:**
- Irish food & drink bloggers (5K-50K followers)
- Regional lifestyle influencers
- Travel bloggers covering Ireland
- Cocktail enthusiasts

**Strategy:**
- Invite for tasting menu + signature cocktails
- Encourage Instagram posts, Stories, Reels
- Provide unique hashtag: #TheBrassDoorExperience
- Feature best content on your social media

### 4.3 User-Generated Content

**Encourage Guests:**
- Instagram-worthy moments (fireplace, brass bar, cocktails)
- Photo contest: "Best Brass Door Moment"
- Review incentives (not for positive reviews, but participation)
- Featured guest photos on website

---

## 5. Review Management

### 5.1 Review Platforms Priority

**Critical Platforms:**
1. Google Business Profile (most important)
2. TripAdvisor
3. Facebook
4. TheFork/OpenTable

**Strategy:**
- Request reviews from happy customers (post-visit email)
- QR code on receipts linking to review page
- Never incentivize positive reviews (against guidelines)
- Respond to ALL reviews (positive and negative)

### 5.2 Review Response Template

**Positive Review:**
```
Thanks [Name]! We're delighted you enjoyed our [specific mention from review].
[Personal touch about their experience]. We can't wait to welcome you back for
[upcoming event/new item]. Sláinte! - The Brass Door Team
```

**Negative Review:**
```
Hi [Name], we sincerely apologize for [specific issue]. This isn't the
experience we strive for. We'd love to make it right. Please contact us
directly at [email/phone]. We're committed to improving. - [Manager Name]
```

---

## 6. Social Media SEO

**Platform Priority:**
1. **Instagram** (Primary - visual content)
2. **Facebook** (Local engagement, events)
3. **TikTok** (Behind-the-scenes, cocktail making)

**Instagram Strategy:**
- Post 4-5x per week
- Stories daily
- Reels 2-3x per week (cocktail tutorials, staff features)
- Hashtags:
  - #TheBrassDoor
  - #CarlingfordBars
  - #IrishCocktails
  - #CraftCocktailsIreland
  - #CarlingfordEats
  - #LouthFood
  - #DiscoverIreland
  - #LiveMusicIreland

---

## 7. Analytics & Tracking

### 7.1 Google Analytics 4 Setup

**Key Events to Track:**
- Reservation clicks
- Phone number clicks
- Menu PDF downloads
- Social media clicks
- Newsletter signups
- Event RSVPs

### 7.2 Google Search Console

**Monitor:**
- Keyword rankings
- Click-through rates
- Crawl errors
- Mobile usability
- Core Web Vitals

### 7.3 KPIs (Key Performance Indicators)

**Month 1-3:**
- 50+ organic sessions/month
- 20+ Google Business Profile actions/month
- 10+ reviews collected
- 5 local citations completed

**Month 4-6:**
- 200+ organic sessions/month
- First page rankings for 3+ target keywords
- 50+ Google Business Profile actions/month
- 30+ total reviews
- 15 local citations completed

**Month 7-12:**
- 500+ organic sessions/month
- #1 ranking for "bar Carlingford"
- Top 3 for 5+ target keywords
- 100+ Google Business Profile actions/month
- 75+ total reviews
- 25+ local citations

---

## 8. Implementation Timeline

### Month 1: Foundation
- [ ] Claim Google Business Profile
- [ ] Complete all technical SEO (schema, meta tags)
- [ ] Submit to top 10 directories
- [ ] Launch with optimized content
- [ ] Install Google Analytics & Search Console
- [ ] Implement review request process

### Month 2: Content & Links
- [ ] Publish 2 blog posts
- [ ] Reach out to 5 local partners for links
- [ ] Submit press release to local media
- [ ] Complete 10 more citations
- [ ] Post weekly on Google Business Profile
- [ ] Collect 5+ reviews

### Month 3: Expansion
- [ ] Publish 2 blog posts
- [ ] Launch influencer outreach (3-5 invites)
- [ ] Implement user-generated content campaign
- [ ] Complete remaining citations
- [ ] Analyze and optimize based on data
- [ ] Collect 10+ more reviews

### Month 4-6: Optimization
- [ ] Publish 6 blog posts (2/month)
- [ ] Secure 3+ quality backlinks
- [ ] Run local PR campaign
- [ ] Create seasonal content
- [ ] A/B test CTAs for reservations
- [ ] Aim for 20+ reviews total

### Month 7-12: Growth & Authority
- [ ] Publish 12 blog posts (1/week)
- [ ] Establish as local authority
- [ ] Pursue regional/national coverage
- [ ] Event-based SEO (festivals, holidays)
- [ ] Maintain consistent posting schedule
- [ ] Aim for 50+ reviews total

---

## 9. Budget Estimate

### DIY Approach (Low Budget)
- **Domain & Hosting:** €100-200/year
- **Photography:** €300-600 (one-time)
- **Citation Services:** €0 (manual submission)
- **Content Creation:** €0 (in-house)
- **Total Year 1:** €400-800

### Professional Approach (Recommended)
- **Domain & Hosting:** €150-300/year
- **Professional Photography:** €500-800 (one-time)
- **SEO Tools:** €100-200/month (Ahrefs/SEMrush)
- **Content Writer:** €200-400/month (2 blogs)
- **Local SEO Service:** €300-500/month
- **Google Ads (Optional):** €500-1000/month
- **Total Year 1:** €8,000-15,000

### Hybrid Approach (Best Value)
- **Technical SEO:** DIY with this guide
- **Professional Photos:** €500
- **Content:** Mix of in-house + freelance
- **Tools:** Free tier (Google tools, Ubersuggest)
- **Total Year 1:** €2,000-4,000

---

## 10. Quick Wins (First 30 Days)

1. ✅ Claim Google Business Profile (Day 1)
2. ✅ Add schema markup to homepage (Day 1-2)
3. ✅ Submit to Golden Pages, TripAdvisor, Facebook (Day 3)
4. ✅ Optimize all meta titles/descriptions (Day 4-5)
5. ✅ Set up Google Analytics & Search Console (Day 5)
6. ✅ Create sitemap.xml and robots.txt (Day 6)
7. ✅ Upload 10+ photos to Google Business (Day 7)
8. ✅ Ask first 10 customers for reviews (Week 2)
9. ✅ Write and publish About page content (Week 2)
10. ✅ Submit to 5 local directories (Week 3)
11. ✅ Post first blog article (Week 4)
12. ✅ Reach out to local tourism board (Week 4)

---

## 11. Competitive Analysis

### Key Competitors in Carlingford:
1. Local bars/restaurants (analyze their rankings)
2. Nearby towns (Dundalk, Newry)

**Research:**
- What keywords are they ranking for?
- What content do they have?
- Where are they getting backlinks from?
- What's their review count?

**Strategy:**
- Identify gaps in their SEO
- Create better content on those topics
- Target their weakness keywords
- Offer unique value (live music, signature cocktails)

---

## 12. Ongoing Maintenance Checklist

### Weekly:
- [ ] Post to Google Business Profile (1-2x)
- [ ] Monitor and respond to reviews
- [ ] Post social media content (4-5x Instagram)
- [ ] Check Google Analytics for issues

### Monthly:
- [ ] Publish 1-2 blog posts
- [ ] Submit to 2-3 new directories
- [ ] Update menu/seasonal offerings
- [ ] Review keyword rankings
- [ ] Analyze traffic and adjust strategy
- [ ] Update opening hours if changed

### Quarterly:
- [ ] Comprehensive SEO audit
- [ ] Update all business listings
- [ ] Refresh seasonal content
- [ ] Review and optimize top pages
- [ ] Competitor analysis
- [ ] Link building outreach campaign

---

## Summary

This SEO plan positions The Brass Door for long-term success in Carlingford's competitive hospitality market. By focusing on local SEO, creating exceptional content, and building genuine authority, you'll dominate local search results and drive consistent foot traffic.

**Key Success Factors:**
1. Consistency (regular content, posting, engagement)
2. Quality over quantity (great photos, reviews, content)
3. Local focus (be THE Carlingford destination)
4. Authenticity (genuine hospitality translates to genuine reviews)

**Expected Outcomes (12 months):**
- #1 for "bar Carlingford"
- Top 3 for 10+ related keywords
- 500+ monthly organic visitors
- 75+ positive reviews
- Established as Carlingford's premier cocktail destination

---

*This plan should be reviewed and adjusted quarterly based on performance data and changing business goals.*
