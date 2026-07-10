---
title: "95% of CFOs Are Confident About Tariffs. Most Can't See Where the Cost Landed."
description: "A recent survey found 95% of executives confident in their ability to manage tariff costs. Almost none of that confidence is built on being able to say, by product and by vendor, where the money actually landed. Here is what changed in February, what changes again on July 24, and how to close the gap."
pubDate: 2026-07-10
category: "Strategy"
tags: ["NetSuite", "Manufacturing", "Tariffs", "ERP", "Finance"]
author: "Brian Gallagher"
draft: false
---

Ninety-five percent of executives in a recent survey said they felt confident in their ability to manage tariff-driven costs. That is a remarkable amount of confidence for a policy environment that has reset itself three times in five months.

Here is what almost none of that confidence is built on: the ability to say, by product and by vendor, exactly where a tariff dollar lands.

You already had the board meeting about tariffs this year. Maybe two. The Supreme Court ruling in February probably came up. Six to three, IEEPA struck down, the tariffs that had driven a year of sourcing headaches suddenly gone. Somebody in that meeting likely said some version of "good, that's settled."

It was not settled. It was a pivot, not an ending. And the next reset is two weeks away.

## What actually happened in February

On February 20, 2026, the Supreme Court ruled that the International Emergency Economic Powers Act never gave the president authority to impose tariffs. The law does not mention tariffs or duties. The Court called tariffs a taxing power that belongs to Congress, not the executive branch. Six justices agreed. The tariffs came down within days.

That felt like an ending. It was a pivot, not an ending.

Within 24 hours, the administration invoked a different law, Section 122, and imposed a new global tariff, first at 10%, then 15% the next day once it hit the statutory ceiling. Section 122 exists for exactly this kind of move. It lets a president impose a temporary surcharge, capped at 15%, for one purpose: to respond to a balance of payments problem. Not a policy choice. A fixed window.

That window is 150 days. It started February 24. It ends July 24.

## The date nobody put on the calendar

In May, a federal trade court ruled that the Section 122 tariffs were also unlawful. The government appealed. That appeal is still open.

Here is the part that matters more than the appeal. The 150 day clock runs out by statute on July 24, whether the appeal is decided by then or not. No court ruling required. No presidential decision required. The law simply expires.

Two weeks from today, the tariff structure your team has been pricing against for the last five months goes away again. What replaces it is not finalized. The administration has signaled a shift toward Section 301, a slower authority that requires an investigation but carries no expiration date and a much stronger legal track record. USTR has already opened investigations covering a large group of countries at proposed rates in the 10 to 12.5% range. None of it is law yet.

So the honest state of play right now is this. The current rates are temporary by design. The next rates are still being written. And the deadline for that transition is inside this month, not next quarter.

## What never moved, through any of this

While the IEEPA fight and the Section 122 fight both played out in court, two things never budged, because they were never part of either case.

Steel and aluminum tariffs sit at 50% for nearly every country, 25% for the UK. Autos and auto parts carry a 25% tariff tied to national security authority, regardless of country of origin or USMCA status. China still carries its older tariffs on top of the newer ones, which is why Chinese-origin goods face the highest combined rate in the system.

If your sourcing touches metals, vehicles, or China, none of the court activity changed your number. It only changed the number for almost everything else.

## Confidence is not the same thing as visibility

Here is where that 95% number stops holding up.

One CFO quoted in that same research offered a less comfortable picture. His competitors are manufacturers based in Mexico who source parts from China tariff-free, then ship into the US tariff-free under USMCA rules. "Some of these tariffs have actually hurt US manufacturers instead of helping them," he said. "If your competition's in Canada or Mexico, it's a problem."

Confidence measures how a leadership team feels. It does not measure whether the finance system underneath them can actually show, by product and by vendor, where the cost is landing. Those are different questions, and only one of them shows up in a survey about sentiment.

Manufacturing is the industry carrying the heaviest load here. It has been hit harder by tariffs than any other sector this year, and manufacturing working capital is up 48%, the largest increase of any industry measured. That is not sentiment. That is cash tied up somewhere it was not tied up two years ago.

## Why the visibility gap is real, even if it is not universal

It would be an overstatement to say no company can see this. It is not an overstatement to say most are not built to see it well.

Sixty-five percent of procurement leaders report a lack of visibility across their own organization's purchasing activity, according to Deloitte. Separately, 92% of supply chain executives named rising costs their top tariff concern, yet only 39% were actively re-evaluating where they source from. That gap, high concern paired with low action, is usually a sign that the data needed to act does not exist yet in a usable form. KPMG puts a number on the outcome: 57% of businesses are already seeing gross margin decline directly tied to trade shifts.

The mechanical reason is simple. A tariff does not arrive as its own line item. It gets absorbed into cost of goods sold, or spread across a blended freight-and-duty number, or buried in a purchase price variance account that nobody breaks apart by SKU. Margin compression is visible at the top of the income statement well before anyone can say which product, which vendor, or which shipment caused it.

## What NetSuite actually does here, and what it does not

For companies running NetSuite, there is real, native functionality built for exactly this problem. It is worth being precise about where it starts and where it stops.

NetSuite's Landed Cost feature lets you define cost categories, including a dedicated Duty or Tariff category, and allocate those costs onto inventory items as they are received, by quantity, value, weight, or a fixed percentage. Items also carry native fields for tariff code and country of origin. The result is that duty stops being an abstraction in a variance account and becomes part of the actual, capitalized cost of that item, traceable by SKU and by vendor.

Here is what it does not do out of the box. It does not know when a tariff rate changes. There is no live feed pulling current rates from a government database into your item records. Left to itself, a system with accurate landed cost logic can still produce stale numbers within a single quarter, which is exactly the situation the next few weeks are about to create.

Reporting takes a bit of setup too. Landed cost data sits in sub-records that are not always simple to query directly. The cleaner approach, and one we build for clients, is routing each tariff charge through a vendor bill line tied to a known account, which then reports cleanly by vendor and by item without extra translation.

Lane-level visibility, seeing cost by specific shipping route, is not something NetSuite tracks natively today. It is a straightforward addition, a custom field or segment layered onto the existing structure, not a platform limitation. For a business actively requalifying suppliers or shifting sourcing toward lower-tariff regions, that one addition is often the difference between reporting on where cost already landed and being able to model where it will land next.

## Closing the manual gap is where NetSuite's real advantage shows up

The manual update problem is not a dead end. It is a build, and it is a build that stays entirely inside the platform you already own.

A Scheduled Script, NetSuite's native background job type, can call an external rate source on a recurring basis and stage the change. A Suitelet, a native custom screen, gives someone on your team a simple page to review that change and approve it before it posts. Neither one requires a separate license. Neither one requires stepping onto a different platform. That is the same architectural advantage this site has pointed to before with native workflow tools: NetSuite ships the scripting layer in the core product, so building something like this means writing to the system you already run, not licensing a second one to sit on top of it.

The AI version of this is not science fiction, and it is not something you have to wait on Oracle to ship. NetSuite's newer AI framework lets SuiteScript logic get exposed as a tool an AI agent can call, using the same approve-before-it-posts pattern Oracle already runs for its own reconciliation agents inside NetSuite EPM. Applied here, an agent reads the external rate change, proposes the update to the landed cost category, and a human signs off before it touches a live record. Nothing posts on its own. That is a real, buildable use case today, not a promise for next year, though the broader agentic tooling around it is still early and worth piloting carefully rather than turning fully loose.

That is the honest version of "NetSuite is agile." Not that it does this automatically today. That when you need to close a gap like this one, the tools to build it are already sitting inside the account, not on a separate platform with its own contract and its own onboarding curve.

## What this actually means for the next two weeks

The tariff conversation is not going to resolve into stability this year. It has reset in February, reset again in that same week, and is set to reset once more on July 24. The pattern is the point. Waiting for calm is not a strategy.

The more useful question is not when this settles down. It is whether you can see your real cost of goods, by product and by vendor, today, without waiting for the quarter to close to find out margin moved. If the answer is no, that gap is worth closing before July 24, not after.

We are happy to walk through what that setup looks like for your business, including the landed cost structure, the reporting, and the lane-level view if your sourcing is shifting. [Schedule a strategy call](/contact) if that conversation would help.

The tariffs were never the surprise. Not knowing when they moved again was.

---

*Sources cited:*

- Supreme Court of the United States, *Learning Resources, Inc. v. Trump*, decided February 20, 2026
- SCOTUSblog, "A breakdown of the court's tariff decision" (February 2026)
- The Budget Lab at Yale, "State of U.S. Tariffs: SCOTUS Ruling Update" (February 20, 2026)
- Skadden, Arps, Slate, Meagher & Flom, "US Trade Court Strikes Down Section 122 Tariffs" (May 2026)
- Nakachi Eckhardt & Jacobson, "Section 122 Global Surcharge Set to Expire July 24" (July 2026)
- Forvis Mazars, "2026 Manufacturing CFO Priorities: Tech, Talent, & Tariffs" (May 2026), citing the C-Suite Barometer and the 2026 Financial Executives Priorities Report
- Deloitte, procurement visibility research as cited in 2026 spend visibility coverage
- KPMG, trade shift and gross margin research as cited in 2026 cost management coverage
- Oracle NetSuite Applications Suite, "Landed Cost Overview" and "Landed Cost Allocation per Line" documentation
- Oracle NetSuite Applications Suite, SuiteScript 2.1 Scheduled Script and Suitelet documentation
- Oracle NetSuite, 2026 R1 release notes on the Custom Tool Script Type and Model Context Protocol framework for AI agents
