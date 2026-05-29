---
title: "Robotics is where aviation was in 1988"
description: "Aviation, automotive, and computing each reached the moment when execution had to be separated from decision-making. Robotics is there now."
date: 2026-05-20
draft: false
tags:
  - why-now
  - precedent
  - safety
---

In 1988, Airbus certified the A320 with a new approach to flight control.

The pilot retained authority over how the aircraft was flown. A separate system, the flight control computer, retained authority over the limits the aircraft would be allowed to reach.

The pilot could ask for any maneuver. The flight control computer would refuse to execute it outside a defined safety envelope.

The two systems were built separately, certified separately, and could fail independently. That separation is what allowed commercial aviation to scale, over the next three decades, into the global fleet it is today.

AI-driven robotics is at the same moment.

The decision-making system inside a modern robot is increasingly an AI model that grows more capable through training and grows less predictable at the same time. The deployment context is moving from controlled enclosures to shared spaces around people.

The same separation aviation made in 1988 is what robotics needs now, for the same reasons.

This is not a metaphor. It is a pattern that has appeared in every domain that has learned to deploy a powerful, evolving decision-making system around people.

This post traces the pattern through three of those domains: aviation, automotive, and computing. The recurrence is consistent enough to be treated as a structural condition for the trustworthy deployment of any capable, evolving decision system, including AI-driven robots.

## Aviation: from autopilot to envelope protection

For decades, autopilots executed pilot-set parameters within a system that assumed the pilot was the ultimate safety authority.

As avionics grew more capable and aircraft control surfaces became electronically actuated, the question of who was authoritative for safety changed.

The A320 introduced the answer. The flight control computer enforces limits on how steeply the aircraft can climb or dive, how sharply it can bank, and how heavily it can be loaded by maneuvering forces.

These limits operate independently of the pilot's input. The pilot is allowed to demand any maneuver. The flight control computer is allowed to refuse to execute it if the maneuver would leave the aircraft's safe operating envelope.

The envelope is encoded in software that is structurally separate from the autopilot above it and from the pilot's commands.

Boeing's later aircraft take a different approach to how those limits are set. The separation between the layer that decides and the layer that enforces is the same.

In both cases, the safety claim is not that the pilot or the autopilot will be correct. The safety claim is that the envelope holds, regardless of what the pilot or the autopilot decides.

This separation is reflected in how regulators evaluate the aircraft. The flight control computer is certified as a safety-critical artifact distinct from the autopilot above it. The two are not the same software, are not certified together, and are not evaluated under the same assumptions.

The separation is what allowed commercial fly-by-wire aviation to scale across global fleets without each airline absorbing the risk of every avionics update.

## Automotive: from anti-lock braking to electronic stability control

Anti-lock braking systems, introduced widely in the 1980s, performed a narrow safety function: prevent the wheels from locking during emergency braking.

Electronic stability control, available broadly in the 1990s, generalized the principle.

The stability control system monitors the vehicle's actual motion and compares it to the motion the driver appears to be requesting through the steering wheel and pedals. When the actual motion diverges from the intended motion in a way the vehicle cannot recover from, the stability control system intervenes.

It brakes individual wheels or reduces engine power to bring the vehicle back inside the range of motion it can physically maintain.

The driver is not required to become a better driver. The intervention layer sits below the driver. The safety claim is not about the driver's correctness. It is about the layer below the driver holding the vehicle inside a physically achievable envelope.

By 2011, electronic stability control was mandated on new passenger cars in both the European Union and the United States. The US National Highway Traffic Safety Administration estimated that stability control prevents thousands of fatalities each year at full fleet penetration.

The mechanism is the structural separation, not a smarter driver.

## Computing: kernel, userspace, and the separation principle

Early personal computers ran without protection. A misbehaving program could corrupt the operating system, other programs, and even the hardware.

As software grew in complexity and variability, this arrangement stopped working. By the mid-1980s, application software was already too capable and too unpredictable to be trusted with direct access to the underlying system.

The answer was structural separation. Hardware support for protected execution arrived in Intel processors in 1982 and became broadly usable in 1985.

Modern operating systems maintain a hardware-enforced separation between the kernel, which manages the underlying system, and userspace processes, which run application code. This separation allows userspace code to be written freely without assuming it will be correct or trustworthy.

If a userspace process misbehaves, the kernel contains the damage.

In safety-critical computing, the principle is taken further. The aviation industry standard ARINC 653 defines a separation kernel that provides isolation in both time and space between applications running on the same computer, with the isolation property certified independently of the applications themselves.

The same idea appears in modern automotive hypervisors used for mixed-criticality software, in formally verified microkernels such as seL4, and in the Common Criteria's separation kernel protection profile used by defense and government systems.

The pattern is consistent: the separation property is structural, is certified once, and continues to hold across changes to the systems being isolated.

## The same shape, three times

The three domains differ in detail. The shape is the same.

In each case, the decision-making system grew more capable and more variable. Autopilots became more sophisticated. More drivers were on the road, with wider skill ranges. Application software became more complex and less verifiable.

In each case, the conclusion was the same. Improving the decision-making system was not sufficient. The safety claim had to be moved into a layer below the decision-making system, a layer that was structurally independent of it and that could be certified, audited, and held accountable separately.

In each case, that layer was given a defined operational envelope and was given the job of holding the system inside it. In each case, the layer was independent enough to remain in place when the decision-making system was updated, retrained, or replaced. In each case, deployment at scale followed the separation, not the other way around.

In each case, the separation also produced something the prior arrangement had not: a system insurable at scale. The structural property and the underwriting property are the same property viewed from different sides.

## Why now, for robotics

AI-driven robots are at the same point.

The AI controlling a modern robot is increasingly a learned model that grows more capable through training and grows less predictable at the same time. The deployment context is moving from controlled enclosures to shared spaces around people.

The consequences of failure are about to become visible at a scale that robotics has not seen before.

The separation move is the same as in the three earlier domains. The AI remains free to learn, adapt, and improve. The execution layer underneath the AI measures, records, and bounds what the robot does, regardless of what the AI decides or how it evolves.

The envelope is declared by the company deploying the robot, the system integrator, or the safety certifier. The boundary holds.

Aviation made the move in 1988. Automotive made it by 2011. Computing made it through the 1980s. Robotics is at the same moment now.
