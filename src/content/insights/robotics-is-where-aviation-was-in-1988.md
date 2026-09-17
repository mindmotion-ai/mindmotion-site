---
title: "Robotics is where aviation was in 1988"
description: "Aviation, automotive, and computing each reached a moment when execution had to be separated from decision-making. Robotics is there now."
date: 2026-05-20
draft: false
tags:
  - why-now
  - precedent
  - safety
---
In 1988, the Airbus A320 airliner was certified with a new approach to flight control.

The pilot retained authority over how the aircraft was flown. A separate system, the flight control computer, retained authority over the limits the aircraft would be allowed to reach.

The pilot could ask for any maneuver. The flight control computer would refuse to execute it outside a defined safety envelope.

Over the next three decades, that separation became the standard in the fly-by-wire airliners that now make up much of the global fleet.

AI-driven robotics is at the same moment.

The decision-maker inside a modern robot is increasingly an AI model that grows more capable through training and grows less predictable at the same time. Robots are moving from controlled enclosures into shared spaces around people.

Robotics has not made that separation yet, and needs it for the same reasons.

The same pattern has appeared in domain after domain: a decision-maker too capable to replace, too variable to verify, and making mistakes too costly to absorb.

It happened in aviation, in automotive, and in computing. In all three, separation became the condition for keeping the decision-maker in place.

## Aviation: from autopilot to envelope protection

For decades, autopilots executed pilot-set parameters within a system that assumed the pilot was the ultimate safety authority.

As avionics grew more capable and aircraft control surfaces became electronically actuated, the question of who was authoritative for safety changed.

The A320 introduced the answer. The flight control computer enforces limits on how steeply the aircraft can climb or dive, how sharply it can bank, and how heavily it can be loaded by maneuvering forces.

These limits operate independently of the pilot's input. The pilot is allowed to demand any maneuver. The flight control computer is allowed to refuse to execute it if the maneuver would leave the aircraft's safe operating envelope.

The envelope is encoded in software that is structurally separate from the autopilot above it and from the pilot's commands.

Boeing's later aircraft take a different approach to how those limits are set. The separation between the layer that decides and the layer that enforces is the same.

In both cases, the safety claim is not that the pilot or the autopilot will be correct. The safety claim is that the envelope holds, regardless of what the pilot or the autopilot decides.

The separation also changed what a pilot can do. 

With envelope protection active, a pilot flying a terrain escape can pull the stick fully back. The aircraft holds at the edge of what the envelope allows, instead of the pilot flying a margin below it by hand. Airbus has carried the same protections across every fly-by-wire type since the A320. The envelope did not force the pilot to fly more conservatively. It made it possible to fly the aircraft to its limits.

This separation is reflected in how regulators evaluate the aircraft. 

The flight control computer is built and evidenced to the highest design assurance level, above the autopilot that commands it. They are not the same software and are not held to the same assumptions.

Separation is what lets an avionics update be assessed on its own, instead of reopening the safety case for the whole aircraft.

## Automotive: from anti-lock braking to electronic stability control

Anti-lock braking systems, introduced in 1978 and widespread by the 1990s, performed a narrow safety function: prevent the wheels from locking during emergency braking.

Electronic stability control, introduced in 1995 and widespread only in the 2000s, generalized the principle.

The stability control system monitors the vehicle's actual motion and compares it to the motion the driver appears to be requesting through the steering wheel and pedals. When the actual motion diverges from the intended motion in a way the vehicle cannot recover from, the stability control system intervenes.

It brakes individual wheels or reduces engine power to bring the vehicle back inside the range of motion it can physically maintain.

The driver is not required to become a better driver. The intervention layer sits below the driver. The safety claim is not about the driver's correctness. It is about the layer below the driver holding the vehicle inside a physically achievable envelope.

By 2011, electronic stability control was being mandated on new passenger cars in the European Union and the United States. The US National Highway Traffic Safety Administration estimated that stability control prevents thousands of fatalities each year at full fleet penetration.

The mechanism is the structural separation, not a smarter driver.

## Computing: kernel, userspace, and the separation principle

Early personal computers ran without protection. A misbehaving program could corrupt the operating system, other programs, and even the hardware.

As software grew in complexity and variability, this arrangement stopped working. By the mid-1980s, application software was already too capable and too unpredictable to be trusted with direct access to the hardware.

The answer was structural separation. Hardware support for protected execution arrived in Intel processors in 1982 and became broadly usable in 1985.

Modern operating systems maintain a hardware-enforced separation between the kernel, which manages the system, and userspace processes, which run application code. This separation allows code to be written freely, without the system having to assume it is correct or trustworthy.

If userspace code misbehaves, the kernel contains the damage.

That freedom is why a phone can run apps from many different companies at the same time. None of them has to be perfect, because if one fails, the others still keep running.

In safety-critical computing, the principle is taken further. The aviation standard ARINC 653 specifies an operating system that keeps applications on one computer apart, in memory and in time. That isolation is established once, so changing one application does not mean re-examining the others.

The same idea appears in modern automotive hypervisors used for mixed-criticality software, in formally verified microkernels such as seL4, and in the Common Criteria's separation kernel protection profile used by defense and government systems.

The pattern is consistent: the separation property is structural, is established once, and continues to hold across changes to the systems being isolated.

## The same shape, three times

The three domains differ in detail. The shape is the same.

In each case, the decision-making system grew more capable and more variable. Autopilots became more sophisticated. More drivers were on the road, with wider skill ranges. Application software became more complex and less verifiable.

In each case, the conclusion was the same. Improving the decision-making system was not sufficient. The safety claim had to be moved into a layer below the decision-making system, a layer that was structurally independent of it and that could be assessed, audited, and held accountable separately.

In each case, that layer was given a defined operational envelope and was given the job of holding the system inside it. In each case, the layer was independent enough to remain in place when the decision-making system was updated, retrained, or replaced.

In each case, the separation also freed the decision-making system. Pilots could fly the aircraft to its limits. Drivers did not have to become better to avoid a crash. Software did not have to be perfect to be useful.

## Why now, for robotics

AI-driven robots are at the same point.

The AI controlling a modern robot is increasingly a learned model that grows more capable through training and grows less predictable at the same time. By now the robot is in a warehouse aisle or a hospital corridor. The consequences of failure are no longer contained by the cell.

The separation move is the same as in the three earlier domains. The AI remains free to learn, adapt, and improve. At the execution boundary, the software measures, records, and bounds what the robot does, regardless of what the AI decides or how it evolves.

Aviation made the move in 1988. Automotive made it by 2011. Computing made it through the 1980s. Robotics is at the same moment now.
