---
layout: home
permalink: index.html

# Please update this with your repository name and project title
repository-name: e18-3yp-project
title: Smart Gatekeeping System & Authentication
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Smart Gatekeeping System & Authentication

---

## Team
-  E/18/068, Devinda G.C., [e18068@eng.pdn.ac.lk](mailto:e18068@eng.pdn.ac.lk)
-  E/18/330, Sewwandi H.R., [e18330@eng.pdn.ac.lk](mailto:e18330@eng.pdn.ac.lk)
-  E/18/368, Uduwange H.U., [e18368@eng.pdn.ac.lk](mailto:e18368@eng.pdn.ac.lk)

## Supervisors

- Dr. Isuru Nawinna , [isurunawinne@eng.pdn.ac.lk](mailto:isurunawinne@eng.pdn.ac.lk)
- Dr. Mahanama Wickramasighe, [mahanamaw@eng.pdn.ac.lk](mailto:mahanamaw@eng.pdn.ac.lk)

<!-- Image (photo/drawing of the final hardware) should be here -->

#### Table of Contents
1. [Introduction](#introduction)
2. [Solution Architecture](#solution-architecture )
3. [Hardware & Software Designs](#hardware-and-software-designs)
4. [Testing](#testing)
5. [Detailed budget](#detailed-budget)
6. [Conclusion](#conclusion)
7. [Links](#links)

## Introduction
---

#### Motivation & Background

Based on the proper management and security purposes, authorities of various institutions use different methods like verifying the identity of a person and keeping records. The system they are using to achieve this may be different. But, there are some instances where we wants to verify the identity of a user very accurately. One of the examples is examinations. Examinations are conducting in various educational institutions such as schools, universities etc.
The basic process of exams is issuing admissions for the registered candidates before the exam. At the exam, candidates can use their admissions to show have permissions to seat in the exam. Most of the times, what the invigilators do is, check admissions and IDs of candidates while conducting the exam and keeping a record.
Examinations are for the assessment of a person. Depending on various reasons, people are cheating on exams. For a year, there are considerable amount of cases that reports on violating rules in exams. One of the common violation is, seating for exams instead of someone else.

What we identified as problems here are as follows.
1. It costs time for manually check and verify users accurately.
2. Violating rules by unauthorized access of people  can be preventable.
3. Keeping records of attendances and store data can be done more efficiently.

So, the motivation of our project is to design a system that can verify the identity of a person/user who registered for the examination/event, keeping a record of their presence/attendance and also providing administration of relevant institution with manageable records. The system could be used for any institution where they need to have authorized people to enter/access premises.

#### Solution and the Impact

We propose to design a gatekeeping system that gets the attendance of the person using a fingerprint scanner(including a keypad and a display screen) and a drop arm gate that opens for a correctly verified fingerprint. The system is connected to a management system of the institution. The administration of the institution can view and handle data there.
The registered users can use the fingerprint scanner. In a situation where the fingerprint scanner cannot detect the fingerprint correctly, the user can use the keypad for entering permissions. The registration number will be the key to marking attendance. After scanning the fingerprint or giving the key, the display screen will display the relevant details of the user. Then, the gate will open for some time range and the user can pass through the gate. Before and after passing the gate, the laser sensors will detect whether the user passed the gate or not. So, with this process, the administration of the institution can see the record of the entrance of the user from the website. 
So, the system will provide a solution for the above problem by reducing the time spent on the process and by accurately verifying whether a person is registered or not.

![Capture](./images/Capture.PNG)


## Solution Architecture
---
![Architecture](./images/Architecture.PNG)

## Hardware and Software Designs

Detailed designs with many sub-sections

## Testing

Testing done on hardware and software, detailed + summarized results

## Detailed budget

All items and costs

| Item          | Quantity  | Unit Cost  | Total  |
| ------------- |:---------:|:----------:|-------:|
| Sample item   | 5         | 10 LKR     | 50 LKR |

## Conclusion

What was achieved, future developments, commercialization plans

## Links

- [Project Repository](https://github.com/cepdnaclk/e18-3yp-Smart-Gate-Keeping-and-Authentication-System)
- [Project Page](https://cepdnaclk.github.io/e18-3yp-Smart-Gate-Keeping-and-Authentication-System)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
