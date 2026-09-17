---
title: "Measures, records, bounds"
description: "The three functions of runtime safety software, what the record proves after an incident, and why it must stay independent of the AI."
date: 2026-05-20
draft: false
tags:
  - what-we-do
  - architecture
  - safety
---
In 1953, David Warren joined an Australian panel examining the crashes of the Comet, the world's first commercial jet airliner. No one aboard survived, and the aircraft carried nothing that recorded what the crews saw or said.

Warren, a chemist at the Aeronautical Research Laboratories in Melbourne, wrote a proposal the following year. He called it "A Device for Assisting Investigation into Aircraft Accidents".

In 1960, Australia became the first country to require recorders of that kind in airliners.

A recorder cannot prevent an accident. It can answer only one question: what happened. That alone was reason enough to require it.

AI-driven robots working around people raise the same question, and one more with it: what bounds the motion while it is happening?

## The runtime safety software

Runtime safety software operates at the execution boundary between the AI and the robot, where decisions become motion.

At that boundary, it does three things on every motion throughout the deployment. It measures what is happening. It records what it observes. It bounds the motion inside an envelope that the company deploying the robot has declared.

These three functions are not a feature list. They describe what runtime safety software for AI-driven robots is.

Anyone who has to price, approve or sign off a deployment ends up asking the same four things: what sits on either side of the boundary, what each of the three functions means, what the software does and does not do, and what makes it useful when the AI is updated or replaced.

## What sits on either side

On one side: the AI.

The AI decides what the robot should do. It can be a learned model, a control policy, or any combination of the two. Increasingly, the AI is a learned model whose behavior is shaped by data and updated continuously.

The AI produces a stream of decisions, each one naming the next motion.

On the other side: the robot.

The robot produces the motion those decisions call for. Motion means the robot's body moving, including joint positions, velocities, forces, and the path traced through space and time.

The safety software sits between these two sides and observes both at every step.

## Measure

Throughout the deployment, the software keeps an accurate picture of what the AI is asking the robot to do and what the robot is actually doing.

On the AI side, it observes the stream of decisions. On the robot side, it observes the robot's physical state: where the joints are, how fast they are moving, what forces are applied, and how the robot is interacting with its surroundings.

Both sides have to be measured. Without measuring the AI's decisions, the software cannot evaluate whether the resulting motion will stay inside the envelope. Without measuring the robot's state, it cannot evaluate whether the motion is in fact what the AI requested.

A measurement is only useful if it is both timely and accurate. Late measurements describe a past that can no longer bound the next motion. Inaccurate measurements describe a robot that does not exist.

Both are failures of the safety software itself, not of the AI or the robot it is monitoring.

## Record

The software produces an account of what happened during a deployment.

The record captures what the AI decided, what the robot did in response, what the software observed at each step, where the envelope was approached or crossed, and what the software did about it.

Each record entry is timestamped and tagged with the version of the AI and the configuration of the safety software that produced it. The records are stored so they can be replayed, queried, and verified afterwards.

Recording is what makes a deployment accountable.

After an incident, the record answers the questions that matter. Did the robot reach a state outside its envelope? If so, when, and what did the safety software do in response? Was the deviation caused by the AI's decisions, by the robot's response to those decisions, or by something in the environment? Which version of the AI was running at the moment of the deviation? What configuration was the safety software using?

Without a record, the company deploying the robot has no account of what happened. With one, it can show an insurer, a regulator or an investigator what the robot did and what the safety software did about it, instead of asking to be believed.

When the European Union adopted its Machinery Regulation in 2023, it required safety control systems whose behavior evolves to record their safety decisions, and to keep that record for a year.

## Bound

The software acts on any decision whose resulting motion would leave the envelope.

In the ordinary case the software adjusts the decision so the motion stays inside the envelope, and the task continues without interruption.

Where a decision cannot be modified into an acceptable motion, the software rejects it before any motion is produced and requests a new decision. Stopping the robot and returning it to a safe state is the last resort.

All three serve one purpose: keeping the motion inside the envelope, regardless of what the AI decides.

The envelope brings together the physical limits of the robot, the contractual limits of the deployment, the regulatory limits of the jurisdiction, and the policy of the company deploying the robot. It is declared, reviewed, configured, and updated by the people who have the authority and accountability for it.

The envelope is not the AI's goal. The AI is free to pursue any goal inside the envelope. The envelope is what makes pursuit of that goal safe.

The safety software's job is not to define the envelope; the envelope is defined by the company deploying the robot.

The safety software's job is to make the envelope binding.

## Independence

The safety software is structurally separate from the AI that decides and from the robot that moves.

A safety property implemented inside the AI is a property of that specific AI. When the AI is updated, the property is updated. When the AI is replaced, the property is replaced. Each update invalidates the previous safety claim.

A safety property implemented as structurally separate software does not depend on the AI. It continues to measure, record, and bound the same way regardless of what the AI decides or how it evolves.

The AI remains free to learn and evolve. The safety software holds.

That independence is what makes the safety claim durable. It is what allows the safety software to be audited by a third party. It is what makes it possible to build a safety case for a deployment without access to the AI that ran it.

The Machinery Regulation singled out safety components whose behavior evolves through machine learning, and put them where an outside body has to assess them.

Warren asked for something that did not depend on the crew's account of the flight. A robot working around people needs the same: a record and an envelope that do not depend on the AI.
