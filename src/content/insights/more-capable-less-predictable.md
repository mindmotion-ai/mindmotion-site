---
title: "More capable, less predictable"
description: "Why the capability and the unpredictability of AI-driven robots come from the same place, and why safety inside the AI is not enough."
date: 2026-05-20
draft: false
tags:
  - the-problem
  - safety
  - physical-ai
---
In 1961, a hydraulic arm went to work at a General Motors plant in New Jersey.

It lifted hot castings out of a die-casting press and stacked them. It was the first industrial robot to work on a production line.

It did one job, in one place, over and over.

Safety came from the arrangement around it. People stayed out of the space the arm could reach.

That arrangement became the model for the next half century.

In 1984, the United States National Institute for Occupational Safety and Health published an alert on preventing robot-related injuries to workers.

The recommendations were physical. Barriers around the robot. Gates with electrical interlocks. Sensors that stop the robot when a person crosses the line.

Two years later the first American robot safety standard, ANSI/RIA R15.06, wrote the principle down: a safeguarded space that people do not enter while the robot runs.

The cage did the heavy lifting. The robot's behavior could be wrong, but the cage contained it.

## Robots are leaving the cage

The old picture of a robot is dissolving.

Humanoid robots, collaborative arms, autonomous mobile platforms, surgical assistants, and warehouse robots are moving out of fenced cells and into shared spaces around people.

The cage does not follow the robots out.

The standards have followed them instead. In 2016, ISO/TS 15066 described what a robot sharing space with a person has to respect once separation is no longer available. It set out permissible contact forces and pressures for each region of the human body.

In 2025, new editions of ISO 10218 took most of that content into the main standards for robots and for robot applications.

Safety can no longer be inherited from the surroundings. It has to become a property of the robot that moves.

## What "around people" means in practice

"Around people" covers a wide range of settings with one feature in common.

At some point, the motion of a robot could matter to a person who never chose to be there.

A humanoid in a warehouse navigating around an order picker. A surgical assistant in an operating room next to a sterile field. A mobile robot in a hospital corridor passing a wheelchair. A cobot on an assembly line handing a part to a colleague. A delivery robot crossing a pedestrian path.

In each case, the company deploying the robot declares an envelope: a region of permitted motion and a set of permitted contacts.

The cage is gone. The envelope is the only thing in its place.

## Capability and unpredictability come from the same place

Robots driven by AI can do more than hand-coded robots ever could. As they take on continuously improving artificial brains, they become more capable but less predictable in what they do.

The two properties share a cause.

The same generality that lets an AI handle new situations also makes what it will do harder to predict.

This is not a defect that more training will eliminate. Better data and larger models can shift the balance, but they cannot remove the cause.

## Where the cost lands

For a robot that moves around people, predictions about the behavior of the AI are not a sufficient basis for safety.

The insurer cannot price what cannot be bounded. The regulator cannot approve what cannot be audited.

For the company deploying the robot, the same problem arrives as a cost.

A limit that has to hold for the worst decision the AI might produce leaves the robot conservative nearly everywhere, moving slower than it safely could.

## Neither the cage nor the model is enough

Inside a cage, safety came from three sources.

The cage was a barrier. The environment was structured, with fixed lighting, fixed surfaces, a known catalog of objects, and a known starting state. The controller was engineered for one task, with known failure modes.

Outside the cage, none of the three holds.

There is no barrier. The environment is the world. The controller is an AI model whose specific failure modes cannot be listed in advance.

A natural response is to make the AI itself safer. Train it on more diverse data. Add safety-relevant examples. Filter the outputs. Run more evaluations.

These approaches are useful and worth pursuing. They cannot, on their own, carry the safety claim a deployment around people requires.

A safety property built inside the AI is a property of that particular AI.

Every update to the model reopens the safety question. Every change of deployment context reopens it again.

The same iteration that makes the system more capable invalidates its prior safety claims. The claim does not last.

Regulators have begun to write that problem down.

When the European Union adopted its Machinery Regulation in 2023, it put safety components that keep learning where an outside body, not the maker, has to assess them.

Whether a safety claim survives the next update is no longer only an engineering question.

## What has to hold

The cage cannot follow the robot out of the cell.

The AI cannot anchor a lasting safety claim, because the AI is the thing being updated.

Something else has to hold.

What is needed is a layer of runtime safety software that measures, records, and bounds what the robot does, regardless of what the AI decides or how it evolves.

A layer that sits between the AI's decisions and the robot's motion, structurally separate from both, providing the independent safety function neither alone can provide.

In 1961, safety was a fence the arm could not reach past.

The robots now moving into warehouses, corridors and operating rooms carry no fence with them. The layer is what takes its place: it travels with the robot, and it holds while the AI keeps changing.
