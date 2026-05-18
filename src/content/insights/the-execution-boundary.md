---
title: 'The execution boundary'
description: 'Why robot safety needs a layer that bounds execution, separate from the AI that decides.'
date: 2026-05-17
author: 'David Braun'
draft: true
---

In aviation, the separation between the cockpit and the engines is not a metaphor. It is enforced by hardware. The pilot's intentions reach the engines through controllers that interpret, bound, and execute commands within explicit operational limits. If the pilot pushes the throttle past a permitted angle of attack, the controller intervenes. The pilot decides; the controller executes within bounds.

This separation makes engineering trust possible. The thing that decides what to do (the pilot, increasingly augmented by autopilot software) is **different from** the thing that actually moves the aircraft (the actuators, governed by control software with explicit invariants). Failures in decision-making cannot, on their own, produce failures in execution that violate physical limits. The two layers fail independently, and the engineering community has developed methods to certify each.

Automotive followed the same path. Modern vehicles separate driver intent from physical motion through electronic control units that enforce limits on braking, steering, and acceleration. Tesla Autopilot, GM Super Cruise, and Mercedes Drive Pilot all sit above a layer that bounds execution.

## What changed for robots

The current generation of AI-driven robotics has collapsed this separation. A large model, often trained end-to-end, decides everything from perception to motion. The model is the pilot *and* the actuator controller. There is no independent layer enforcing what the robot can physically do.

This works in the lab. It does not work in deployment around people, for the same reason it would not work in aviation: the system that decides cannot also be the system that enforces. Trust requires independence.

> The thing that decides what to do is, by construction, different from the thing that actually does it. This is what makes engineering trust possible.

## The execution boundary

We call this missing layer the **execution boundary**. It sits between the AI's decisions and the robot's motion. At that boundary, the runtime software:

- Measures what the robot is about to do
- Records the input and the output, the decision and the action
- Bounds the action within the operational envelope the system is allowed to leave

The boundary does not replace the AI. It does not constrain the AI to particular behaviors. It enforces the physical envelope the robot must respect regardless of what the AI decides or how the AI evolves over time.

This is what allows the robot to be deployed around people without each new AI update requiring a new safety certification of the entire system. The AI can update; the boundary stays.

### What "bounded" means in code

In practical terms, the boundary expresses constraints as runtime checks of the form:

```
if proposed_motion violates envelope:
    project_onto_envelope(proposed_motion)
    record(proposed_motion, envelope, projection)
```

The implementation details vary. The pattern does not.

## What this means in practice

For a robot moving in human-occupied spaces, the execution boundary specifies, at minimum:

1. Kinematic envelopes the robot is allowed to operate within
2. Force and energy limits at the end-effector
3. Speed limits relative to detected proximity to people
4. Response behavior when the AI's commands fall outside any of the above

These are not novel ideas. They are decades-old practice in industrial robotics, where [ISO 10218](https://www.iso.org/standard/73933.html) and [ISO/TS 15066](https://www.iso.org/standard/62996.html) specify them for cell-based and collaborative robots. What is new is bringing them to the kind of mobile, generalist, AI-driven robots that are now leaving laboratories.

That is the work.
