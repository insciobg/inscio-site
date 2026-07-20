---
title: "NetSuite AI Units Explained: What You Get, What Uses Them, and When You'll Pay"
description: "NetSuite now meters AI usage through AI Units. Here is how the model works, how many units your licenses include, what consumes them, and how to manage the pool before you buy more."
pubDate: 2026-07-20
category: "Pricing"
tags: ["AI", "NetSuite", "pricing", "licensing", "AI Units"]
author: "Brian Gallagher"
draft: false
---

As of July 6, 2026, AI usage in NetSuite is metered. Every AI request inside the platform now draws from a pool of **NetSuite AI Units**, and every account has one.

If that sounds like a new bill, take a breath. For most customers it is not. Your existing user licenses already include a meaningful allocation, and nothing changes until you use AI heavily enough to burn through it.

But "metered" means the meter matters. This guide covers how the model works, what you get, what consumes it, and the contract details worth knowing before anyone offers to sell you more.

## What AI Units are

NetSuite AI Units are the consumption currency for AI across the platform. When NetSuite's AI generates content, delivers insights, automates a task, or recommends an action, it consumes units from your account's pool. How many depends on the feature and the complexity of the request.

This follows the pattern most enterprise software has settled on: AI capabilities are expensive to run, so vendors meter them rather than bundling unlimited usage into the license. NetSuite's version is more customer-friendly than many, for one main reason: you start with a real allocation instead of starting at zero.

## What you get

The math is simple and worth doing for your own account.

Each **NetSuite General Access user license includes 1,000 AI Units per month**, multiplied by the months in your term, provisioned upfront. The units land in a single account-level pool that any authorized user can draw from.

So a company with 15 full users on a 36-month term receives **540,000 AI Units** (15 x 1,000 x 36), available on day one and usable any time during the term. Add users mid-term and you receive units for the months remaining.

Three properties of the pool matter:

**It is pooled, not per-user.** Your controller can consume units your warehouse users never touch. This is good design. AI adoption is never uniform across a company, and pooling lets the units flow to where the value is.

**It is provisioned upfront.** The full term's allocation is available immediately. A heavy first year of AI experimentation is fine, as long as you watch the balance.

**It expires.** Unused units do not carry over from term to term, and they are not refunded or credited toward anything else. Use them or lose them.

Existing customers were provisioned in mid-July based on months remaining in their current term, and NetSuite notified account contacts directly.

## What consumes units, and what doesn't

This is where the details reward attention. Not everything with "AI" on the label draws from the pool.

**Consumes AI Units:** the generative AI features inside NetSuite and NetSuite Next. Oracle publishes [usage estimates for each feature](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_2163848930.html), and the numbers are useful for planning:

- **Ask Oracle:** roughly 10 units for a simple question, 10 to 50 for an analysis question, 50 to 200 for a research question like "show me the top five customers by overdue A/R balance this quarter"
- **Text Enhance:** 5 to 10 units per request
- **Narrative Insights:** 5 to 200 units per generated summary
- **Case Summary:** 5 to 75 units per case
- **SuiteScript N/llm module:** 5 to 25 units per scripted prompt, which is what developers use to build AI into customizations

Put that against the allocation and the model gets concrete. One user's 1,000 monthly units covers roughly **100 simple Ask Oracle questions**, or 100 to 200 Text Enhance actions, or a handful of heavy research queries per day. Actual consumption varies with request complexity, but the shape is clear: casual use barely dents the pool, while research-style questions and AI-heavy scripts are what move the meter.

**Does not consume AI Units:** two categories that surprise people.

First, the **NetSuite AI Connector Service**. If you connect an external AI assistant like Claude to NetSuite through the AI Connector, those requests run on the LLM provider's side, not NetSuite's, so they do not touch your unit pool. You pay your AI provider instead.

Second, **add-on modules with their own AI**, like Bill Capture, the EPM products, and NetSuite Analytics Warehouse. Their AI features are covered by the module subscription and sit outside the AI Unit model.

One more detail that developers and admins will appreciate: **sandbox and development environments get their own dedicated AI Unit pools**, sized to match your production pool, at no additional cost. Testing an AI-heavy customization will not drain your production allocation.

## When you'll actually pay

Only if you exhaust the included pool. At that point, NetSuite sells top-up packs: a 10,000-units-per-month pack and a 25,000-units-per-month pack, each multiplied across your remaining term like the included allocation.

Two contract details are worth knowing before that conversation happens.

**Discount protections do not apply.** The Service Descriptions state plainly that price locks, discount holds, and similar protections in your existing agreement do not apply to AI Unit purchases. Whatever discounting history you have with NetSuite, AI Units start from list.

**Exhaustion has teeth.** If your pool runs out, NetSuite may limit or suspend access to AI-powered functionality until you purchase more. That is standard for consumption models, but it means a team that has built AI into a daily workflow should never let the balance hit zero unplanned.

Your admin can monitor the pool under Setup > Company > View Billing Information. If AI is becoming part of how your team works, that balance belongs on someone's monthly checklist, the same way you track file storage or SuiteAnalytics user counts.

## The smart adoption path

The sequence NetSuite itself recommends is the right one, and it costs nothing to follow:

**Start with what is included.** For a typical mid-market account, the included allocation is a generous runway for exactly the kind of experimentation that reveals where AI actually helps your business.

**Watch the usage reporting.** Within a quarter you will know which features your team actually uses and what your real monthly burn rate looks like. That number, not a sales projection, should drive any purchase decision.

**Buy only when usage proves it.** If the meter shows you approaching the pool's limit because the team genuinely relies on the AI features, that is a good problem. You are buying capacity for something already delivering value, which is the only reason to buy anything.

And one strategic note: because the AI Connector path does not consume units, companies planning heavy AI usage have a real architectural choice. Embedded NetSuite AI draws from the pool. External AI working through the connector draws from your LLM provider bill. Where each workload should live is now partly an economics question, and it is worth thinking through before usage patterns harden.

## What you can do with the units today

The allocation is only interesting if the AI is useful. Two recent additions stand out.

The **Finance Analyst Skill**, released in June, is a free, NetSuite-aware skill for close commentary, variance analysis, reconciliation review, and cash analysis. It produces structured, executive-ready drafts instead of blank-page starts. It works with the AI Connector Service, so finance teams using Claude can invoke it directly.

For technical teams, **SuiteCloud Agent Skills** now include SuiteScript learning and SDF SAFE Guide skills that embed NetSuite-specific guidance into AI coding tools like Claude Code and Cursor. They are free, and they meaningfully reduce the trial-and-error cost of NetSuite development.

If your instinct is that this is a lot of new surface area, you are right. The platform is adding AI capability faster than most customers are absorbing it. That gap is normal, and closing it deliberately beats closing it reactively.

## The bottom line

NetSuite AI Units are a reasonable, transparent way to meter AI, and most customers will live comfortably inside the included allocation for a long time. The model rewards exactly one behavior: knowing your own usage.

So treat this like any other licensing question. Know what your term includes. Watch the meter. Buy from evidence, not projection. And when your renewal comes up, remember that your AI Unit allocation is tied to your eligible user count, which makes it one more line in the [renewal conversation](/blog/netsuite-renewal-guide) worth walking into prepared.

If you are sorting out what NetSuite should cost your business overall, our [free pricing calculator](/netsuite-pricing-calculator) produces a defensible budget range in about 60 seconds. And if you want to talk through AI adoption with a senior NetSuite consultant, our strategy calls are free and unbiased.
