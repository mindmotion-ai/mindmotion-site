---
title: "Safety that does not cost throughput"
description: "Anti-lock brakes add no grip, yet the car stops shorter. Why the gap between what a robot may do and what it does is not the price of safety."
date: 2026-09-15
draft: false
order: 3
tags:
  - how-it-works
  - throughput
  - safety
---
In 1978, Mercedes-Benz began selling the S-Class with a Bosch anti-lock braking system, the first digitally controlled anti-lock brakes in a production car.

Engineers had been chasing the idea for decades. Bosch filed a patent in 1936. Aircraft flew with anti-skid brakes through the 1950s. A British car, the Jensen FF, carried a mechanical version in 1966. What the 1978 car added was digital electronics fast enough to keep up with a wheel.

The problem all of them were solving was grip. A locked wheel slides, grips less than a wheel that is still turning, and cannot steer the car. The most grip sits near the point where a wheel begins to slip, and that point moves with the road: dry, wet, icy.

Driving schools taught pumping the pedal to improve braking, in the few seconds when a driver has the least attention to spare. 

Anti-lock brakes do that for the driver.

They release pressure as a wheel starts to lock and reapply it, many times a second, holding each wheel near the edge of its grip.

They never brake harder than the driver asks. They only ever brake less. Yet on most roads a car with anti-lock brakes stops shorter than one whose wheels lock, and the driver can steer while it happens. The car gains no grip. The driver gets all the grip that is there, at the moment it is there.

An AI-driven robot working around people has the same problem, with limits in place of grip.

The AI decides what the robot does next: where to reach, how fast to cross a room, when to hand a part over. It works at the pace of the task, the way a driver works at the pace of the road.

The physics runs faster. Forces build and limits are reached in milliseconds, below the pace at which any decision maker, human or model, can react.

The limits themselves come from the company deploying the robot, not from the safety software. Its job is to handle the millisecond physics, holding the robot inside those limits while the AI keeps deciding.

When that is not possible, the robot is held to one conservative number instead, and the cost is throughput.

That cost is not the price of safety. It is the price of AI decisions that cannot keep pace with the physics.

## The robot's one number

For most of the history of industrial robots, the rule for working around one was a fence. Inside it the robot ran at full speed. Outside it people were safe because they could not reach the robot at all.

When someone had to be inside, to teach or verify a program, the robot was held to a crawl: 250 millimetres per second at the tool. That figure is written into the international robot safety standard, and into the American standard before it. One number, chosen in advance, for every situation a person might turn out to be in.

In 2016, ISO/TS 15066 set out what a robot sharing space with people actually has to respect.

It gives permissible contact forces and pressures for each region of the human body. It sets one set of values for a brief impact the body can recoil from, and another for contact that traps a body part.

It makes the distance a robot keeps from a person depend on how fast both are moving and how quickly the robot can stop.

Those requirements became part of ISO 10218-2, the standard for robot applications and cells, in 2025.

The specification runs long because the limit is not one number. It changes with what the robot is carrying, where it is moving, and who is around it. It changes while the robot works.

## Where the throughput goes

A robot that cannot work out which limit applies right now, and hold to it in time, has one safe option. It takes the strictest limit it might meet and holds that everywhere.

A humanoid crossing an empty warehouse aisle is held to the same number as one working beside a person at a bench. It brakes as if every road were ice.

A robot builder meets the same problem when setting speeds and forces. Those settings have to be safe in the worst situation, so the robot runs at them everywhere.

Wherever the limit that actually applies is less strict, the robot does less than it is allowed to. That difference is the gap between what a robot may do and what it does, and the robot pays for it in throughput, every second it moves.

## Why the gap is not a safety margin

A safety margin covers what cannot be known exactly: measurement error, model error, wear. Engineers size it to the uncertainty, and it stays.

The gap has a different cause. Nothing is wrong with the limits. The robot is held to a stricter limit than the moment requires because it cannot tell, in time, which limit applies.

## What closing the gap takes

Two things have to happen together. One is working out what the limits allow in the situation the robot is in now. The other is bounding the motion inside it before that situation changes.

Neither is enough alone. Knowing the limit but acting late can mean crossing it. Acting in time on the wrong limit means holding precisely to the wrong one.

Both have to happen continuously, faster than the situation changes. No human operator could keep up, and a number chosen in advance cannot follow a situation it never sees. What the safety software can hold also depends on what it can measure: the slower or coarser the measurement, the more margin it has to keep.

Here the analogy with anti-lock brakes stops. They find the edge of grip by going just past it and backing off. A limit that protects a person is not one to find by crossing it, so the robot has to know what applies before its motion gets there.

## Keeping the AI in control

The safety software sits between the AI and the robot. It measures what is happening, and bounds the resulting motion inside what the envelope allows, continuously, while the task runs.

In the ordinary case the motion is adjusted, not interrupted, and the task continues. The AI stays in control of the task, the way anti-lock brakes keep a driver in control of the car. The brakes never choose where the car goes, and they never take the wheel.

The safety software does not slow the robot as a policy. It acts where the limits bind, not everywhere else.

Nothing here relaxes a limit. The company deploying the robot still declares every one of them. What changes is how much of what they allow the robot can use.

## The tradeoff was never between safety and throughput

Held to a single number, a robot does face a tradeoff. A less strict number costs safety exactly where the limits are strictest. A stricter number costs throughput everywhere else.

That tradeoff belongs to the number, not to safety. Throughput is lost to something else: not being able to hold the limit that applies at the moment it applies.

Holding a limit that changes as the task changes is a measurement problem. It belongs to safety software that measures, records, and bounds what the robot does, regardless of what the AI decides or how it evolves.

Anti-lock brakes add no grip. They handle the part of braking that runs faster than a driver can.

The safety software sets no limits of its own. It handles the part of the motion that runs faster than the AI can, so the robot can work at what the limits allow.
