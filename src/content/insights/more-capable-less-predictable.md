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

Robots driven by AI are more capable than hand-coded robots have ever been. They are also less predictable in what they will do.

The two properties come from the same place. The same model breadth that allows an AI to handle a wide range of situations is what makes its behavior harder to predict in any specific one.

This is not a defect that more training will eliminate. It is a property of how AI models work.

For most of the history of industrial robotics, this tension did not have to be resolved. Safety was a property of context. Robots worked inside steel cages, behind light curtains, on fixed paths, executing hand-coded logic with predictable failure modes.

The cage did the heavy lifting. Behavior could be wrong, but the cage contained it.

That arrangement is dissolving. Humanoid systems, collaborative arms, autonomous mobile platforms, surgical assistants, and warehouse robots are moving out of fenced cells and into shared spaces.

The fence does not come with them.

The robots are simultaneously more capable than they used to be and less predictable than they used to be. Safety, in this new arrangement, can no longer be inherited from the environment. It has to be a property of the system itself.

## What "around people" means in practice

The phrase "around people" describes a wide range of operating contexts that share a common feature: at some point in the task, a robot's motion could matter to a person who has not opted into being part of that task.

A humanoid in a warehouse navigating around an order picker. A surgical assistant in an operating room next to a sterile field. A mobile robot in a hospital corridor passing a wheelchair. A cobot on an assembly line handing a part to a colleague. A delivery robot crossing a pedestrian path.

In each case, the company deploying the robot declares an envelope: a region of permitted motion, a set of permitted contacts, a set of permitted overrides.

The cage is gone. The envelope is the only thing in its place.

## The tradeoff is structural

Better data and larger models shift the balance between capability and predictability. They do not collapse it.

For the foreseeable future, the same systems that are growing more capable will continue to be less predictable in what they will do.

For deployments where a robot moves around people, predictions about the AI's own behavior are not a sufficient basis for safety. The customer cannot absorb the residual risk. The insurer cannot price what cannot be bounded. The regulator cannot approve what cannot be audited.

## Neither the cage nor the model is enough

Inside a cage, safety came from three sources that no longer apply outside.

The cage itself was a passive barrier. The environment was structured, with fixed lighting, fixed surfaces, a fixed catalog of objects, and a known starting state. The controller was specifically engineered for a defined task with known failure modes.

Outside the cage, none of these hold. The barrier is gone. The environment is the world. The controller is an AI model whose specific failure modes cannot be enumerated in advance.

A natural response is to make the AI itself safer. Train it on more diverse data. Add safety-relevant examples to its training. Filter its outputs. Run more evaluations.

These approaches are useful and worth pursuing. But they cannot, by themselves, provide the kind of safety claim a deployment around people requires.

A safety property implemented inside the AI is a property of that specific AI. Every time the model is updated, the property has to be re-established. Every time the deployment context changes, the property has to be revisited.

The same iteration that makes the system more capable invalidates its prior safety claims. The claim does not last.

Neither source of safety transfers. The cage cannot follow the robot out into shared space. The AI cannot anchor a durable safety claim because it is the thing being updated.

Something else has to hold.

## The structural shift

What is needed is a layer that measures, records, and bounds what the robot does, regardless of what the AI decides or how it evolves.

A layer that sits between the AI's decisions and the robot's motion, structurally separate from both, providing the safety guarantee neither alone can provide.
