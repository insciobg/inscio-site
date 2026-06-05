---
title: "AI Fails Inside Companies That Never Automated the Basics"
description: "Only 40% of companies see EBIT impact from their AI investments. The data points to one root cause: the workflows were never designed in the first place. Here is what the research says, and why the ERP you already own is the missing foundation."
pubDate: 2026-06-06
category: "Strategy"
tags: ["AI", "NetSuite", "Workflow", "Automation", "ERP", "Process"]
author: "Brian Gallagher"
draft: false
---

Most AI projects do not fail because the AI is bad.

They fail because the process underneath the AI never existed.

McKinsey's 2025 State of AI report puts a number on it. Seventy-eight percent of organizations have adopted AI. Only forty percent see enterprise-level EBIT impact from it. The gap between adoption and return is wider than any technology gap in the last decade.

Something is going wrong between the pilot and the payback. The research keeps pointing to the same answer.

## The eight-year-old warning that just got vindicated

In 2018, Harvard Business Review published a piece titled "Before Automating Your Company's Processes, Find Ways to Improve Them." It was not flashy. It made one argument. If you automate a broken process, you get a broken process at scale.

That article still gets cited in 2026. Not because the wisdom was unique. Because the warning got ignored.

McKinsey's January 2025 research adds the data. High performers in AI deployment are three times more likely to have fundamentally redesigned their workflows than companies stuck in pilot purgatory. Workflow redesign was the single strongest predictor of business impact.

The companies that captured the value did the unsexy work first.

## The pattern we keep seeing

The shape is almost always the same.

A company invests in NetSuite or any modern ERP. The system goes live. Transactions flow. Reports run. So far, so good.

Then a finance leader watches a demo of an AI tool that reads invoices, drafts emails, and surfaces anomalies. The pitch is compelling. The pilot starts.

Three months later, the pilot is technically working. It also is not connected to anything that matters. The approval chain still lives in Outlook. Purchase orders are still routed by forwarded messages. The audit trail still needs to be reconstructed from email when someone asks for it.

The AI tool is reading documents. It just has nowhere to send them.

This is not a tooling problem. The tools are fine. The problem is what is missing underneath them.

## What "the basics" actually means

Before AI can deliver leverage, three things have to be true.

The process has to exist as a process, not as a habit. Someone has to be able to describe how a vendor bill gets approved without saying "well, it depends on who emails who."

The routing has to live in the system, not in inboxes. When a record is saved, the right approver has to receive it without anyone manually deciding what happens next.

The audit trail has to be automatic. Every action, every approver, every decision has to land in the same place, every time, with no extra effort.

None of this requires AI. It requires a workflow engine and the discipline to use it.

## The capability you already own

Here is what most ERP customers do not realize. The engine they need is already in the box.

NetSuite includes SuiteFlow, its native workflow engine, in the core platform. No extra license. No separate platform fee. Same applies to SuiteApprovals, the free SuiteApp that sits on top of SuiteFlow and gives you rules-based approval routing out of the gate.

A note on the comparison. Inscio is a NetSuite-exclusive firm. I am not the expert on competing platforms, and the picture below reflects what I have read and seen in evaluations, not direct hands-on work. The pattern I am confident in is the one inside NetSuite.

That said, from what I have seen of the others, the picture looks roughly like this.

SAP S/4HANA includes Flexible Workflow for standard approvals like purchase orders and invoices. When customers need more sophisticated workflow design, they are typically routed to SAP Build Process Automation, which runs on SAP Business Technology Platform. That is a separate licensing tier.

Microsoft Dynamics 365 customers can use the native workflow features, which Microsoft now treats as legacy. The recommended path is Power Automate, which runs on Power Platform. Dynamics 365 users get limited Power Automate rights included, but extended or premium use requires separate Power Platform licensing.

Acumatica and Sage Intacct both include approval workflow capabilities natively. The depth and configurability vary by edition.

So every modern ERP has workflow capability somewhere. What looks distinctive about NetSuite, from where I sit, is that SuiteFlow ships with the core platform across the full range of complexity. Customers do not have to step onto a second platform once their workflow needs grow beyond the basics.

That distinction matters more than most teams realize. Because the more layers between the request and the routing, the more reasons not to bother turning it on.

## The numbers nobody can argue with

Gartner has been publishing data on this for years. The picture sharpens every time.

Top-quartile accounts payable operations process invoices at an average cost of $4.98 each. Bottom-quartile operations cost $12.44 per invoice. The difference is not technology. The difference is process discipline applied to the same underlying tools.

Gartner also estimates that finance departments can recover 25,000 hours per year of avoidable rework by deploying robotic process automation in financial reporting. That figure assumes the workflows being automated are already structured. Where they are not, the savings disappear into manual reconciliation that the RPA cannot help with.

Forrester's Total Economic Impact studies show similar gaps. Microsoft Power Automate deployments documented 248% ROI over three years with payback in under six months. Basware's AP automation TEI showed 158% ROI with a 50% productivity gain for AP clerks.

Every one of these returns starts the same way. Define the process. Get it into the system. Then layer automation on top.

The companies that skip the first two steps see none of those numbers.

## Where AI actually fits

Once the foundation is real, AI changes the work in a way that nothing else can.

A workflow can route a vendor bill to the right approver. AI can read the bill first, check it against the purchase order, flag a quantity mismatch, draft a note to the vendor, and route a clean record forward. The workflow handles the path. AI handles the reading.

A workflow can enforce a dollar threshold. AI can summarize a 47-line invoice in one sentence and tell the CFO whether anything on it looks unusual compared to last month.

A workflow can lock a record after approval. AI can monitor the data that feeds the workflow, watch for patterns that should trigger review, and surface exceptions that nobody asked it to look for.

This is the layer where the next wave of returns shows up. Not as a replacement for the workflow. As a different kind of work that the workflow makes possible.

The catch is that this only works if the workflow exists. AI applied to a process that lives in email does not produce returns. It produces noise.

## How to think about the order

The decision framework is simpler than most companies make it.

If approvals are still in email, the next investment is not AI. It is turning on the workflow engine you already own.

If routing is in place but the logic was built custom for what the native SuiteApp already does, the next investment is not AI. It is consolidating the custom build back to the native framework, so it stops costing maintenance every release.

If the routing is solid and the bottleneck has shifted to the reading and judgment that happens before the approval, that is the moment AI earns its place.

In that order, every layer compounds. Out of that order, every layer costs more than it returns.

## What we tell clients

The honest answer about AI right now is that it works. The tools are real. The pilots are not faking it.

But the gap between adoption and return is not closing. McKinsey's 78% adoption to 40% impact ratio is the data version of what every consultant is seeing in the field. The companies winning with AI are not the ones with the best AI. They are the ones whose business processes were already structured well enough for AI to plug into.

For NetSuite customers, the implication is clear. The capability is already paid for. The engine is included. The question is whether the time gets spent operationalizing it.

You can see what "operationalized" actually looks like through the [interactive demo](/netsuite-suiteapprovals-demo) on our site. It walks through a real multi-level purchase approval running on SuiteApprovals, no sales call required. The first reaction is usually some version of, "I did not realize this was already in there."

The follow-up question is usually about AI. And the honest answer is the one McKinsey, Gartner, and Forrester all keep landing on. AI works best in environments where the workflow foundation was built first.

If you are weighing where to invest next, the cheapest and highest-return move is almost always the one already sitting in the system. The AI conversation is more productive once that work is done.

We are happy to map your current process and tell you honestly which of the three layers belongs where. [Schedule a strategy call](/contact) if that conversation would be useful.

The basics are not glamorous. They are also what makes everything else work.

---

*Sources cited:*

- McKinsey, "The state of AI in 2025: Agents, innovation, and transformation"
- McKinsey, "Bridging the great AI agent and ERP divide to unlock value at scale" (January 2025)
- Harvard Business Review, "Before Automating Your Company's Processes, Find Ways to Improve Them" (2018, still in current circulation)
- Gartner, "Robotic Process Automation Can Save Finance Departments 25,000 Hours of Avoidable Work Annually"
- Forrester, "Total Economic Impact of Microsoft Power Automate"
- Forrester, "Total Economic Impact of Basware AP Automation"
