---
title: "Measures, records, bounds"
description: "The three structural functions of runtime safety software for AI-driven robots, and what makes them work when the AI is updated or replaced."
date: 2026-05-20
draft: false
tags:
  - what-we-do
  - architecture
  - safety
---

Runtime safety software for AI-driven robots operates at the interface between the AI and the robot, where decisions become motion.

At that interface, it does three things on every motion, throughout the deployment. It measures what is happening. It records what it observes. It bounds the motion inside an envelope that the company deploying the robot has declared.

These three functions are not a feature list. They are the structural job of the software. Each carries weight the others cannot. Together they describe what runtime safety software for AI-driven robots actually is.

This post describes the work in concrete terms. What sits on either side of the interface. What each of the three functions means. What the layer does and does not do. What makes it useful when the AI is updated or replaced.

## What sits on either side

On one side: the AI.

The AI is the decision-making system that determines what the robot should do. It can be a learned model, a control policy, or any combination of the two. Increasingly, the AI is a learned model whose behavior is shaped by data and updated continuously.

The output of the AI is a stream of decisions: what motion to produce next.

On the other side: the robot.

The robot is the physical system that produces motion in response to those decisions. Motion here means the actual physical movement of the robot's body, including joint positions, velocities, forces, and the path traced through space and time.

The safety software sits between these two sides and observes both at every step.

## Measure

The software maintains, at a fixed rate throughout the deployment, an accurate picture of what the AI is asking the robot to do and what the robot is actually doing.

On the AI side, it observes the stream of decisions arriving from the AI. On the robot side, it observes the robot's physical state: where the joints are, how fast they are moving, what forces are applied, and how the robot is interacting with its surroundings.

Both sides have to be measured. Without measuring the AI's decisions, the software cannot evaluate whether the resulting motion will stay inside the envelope. Without measuring the robot's state, it cannot evaluate whether the motion is in fact what the AI requested.

A measurement is only useful if it is both timely and accurate. Late measurements describe a past that can no longer constrain the next motion. Inaccurate measurements describe a robot that does not exist.

Both are failures of the safety software itself, not of the system it is monitoring.

## Record

The software produces, in real time and durably, a structured account of what happened during a deployment.

The record captures what the AI decided, what the robot did in response, what the software observed at each step, where the envelope was approached or crossed, and what the software did when the envelope was approached.

Each record entry is timestamped and tagged with the specific version of the AI and the specific configuration of the safety software that produced it. The records are stored so they can be replayed, queried, and verified after the fact.

Recording is what makes a deployment accountable.

After an incident, the record answers the questions that matter. Did the robot reach a state outside its envelope? If so, when, and what did the safety software do in response? Was the deviation caused by the AI's decisions, by the robot's response to those decisions, or by something in the environment? Which version of the AI was running at the moment of the deviation? What configuration was the safety software using?

Without records, a deployment is opaque to the company deploying it. With records, a deployment is investigable, comparable across runs, and defensible to a third party who was not present when the motion occurred.

A record produced this way is the artifact an insurer, a regulator, or an investigator can use to reason about a deployment without access to the AI that ran it.

## Bound

The software enforces the envelope. Motion that would leave the envelope is not produced.

The specific mechanism depends on the situation. The software can modify a decision so the resulting motion stays inside the envelope. It can stop a motion that has begun to leave the envelope and return the robot to a safe state. It can reject a decision before any motion is produced and request a new decision.

In all cases, the robot's motion is held inside a region the company deploying the robot has declared acceptable, regardless of what the AI decides.

The envelope is a separate object from the AI's goal. The AI is free to pursue any goal inside the envelope. The envelope is what makes pursuit of that goal safe.

The envelope encodes the physical limits of the robot, the contractual limits of the deployment, the regulatory limits of the jurisdiction, and the policy of the company deploying the robot. It is declared, reviewed, configured, and updated by the people who have the authority and accountability for it.

The safety software's job is not to choose the envelope. Its job is to make the envelope binding.

## Independence

The three functions work together because they are performed by a layer that is structurally separate from the AI that decides and from the robot that moves.

A safety property implemented inside the AI is a property of that specific AI. When the AI is updated, the property is updated. When the AI is replaced, the property is replaced. Each update invalidates the previous safety claim.

A safety property implemented as a structurally separate layer is independent of the AI. It continues to measure, record, and bound the same way regardless of what the AI decides or how it evolves.

The AI remains free to learn. The layer holds.

That independence is what makes the safety claim durable. It is what allows the layer to be audited by a third party. It is what makes it possible to certify a deployment without certifying the AI inside it.

The layer is a structural answer to a question the model alone cannot answer.
