---
title: Network of Experts CNN Architecture
description: >-
  I have read 5 articles that have worked on Network of Experts, and I want to
  share some important part of this papers that I've found it super cool.
date: 2019-06-19T20:50:42.346Z
published: true
cover_image: /images/uploads/approach.jpg
tags:
  - Markdown
content: >-
  I have read 5 articles that have worked on Network of Experts, and I want to
  share some important part of this papers that I've found it super cool. 


  ## Network of Expert

   A tree-structured network architecture for large-scale image classification that can classify most similar and confusing classes in high accuracy.

  The full article that I am going to talk about is
  [here](https://arxiv.org/pdf/1604.06119.pdf). Network of Experts for
  Large-scale image categorization.


  _The trunk of the network contains convolutional layers optimized over all
  classes_. At a given depth, the trunk splits

  into _separate branches_, each dedicated to discriminate a different subset of
  classes. _Each branch acts as an expert_ classifying a set of categories that
  are difficult to tell apart, _while the trunk provides common
   knowledge to all experts in the form of shared features._ The training of
   our **“network of experts”** is completely **end-to-end:** the partition of categories into disjoint subsets is learned simultaneously with the parameters
   of the network trunk and the experts are trained jointly by minimizing a single learning objective over all classes. The proposed structure
   can be built from any existing convolutional neural network (CNN). The paper demonstrate its generality by adapting 4 popular CNNs for image categorization into the form of networks of experts. They worked on CIFAR100 and ImageNet. 

  ![](/images/uploads/approach.jpg)
---

