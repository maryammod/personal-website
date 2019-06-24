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
content: "I have read 5 articles that have worked on Network of Experts, and I want to share some important part of this papers that I've found it super cool. \n\n## Network of Expert\n\n A tree-structured network architecture for large-scale image classification that can classify most similar and confusing classes in high accuracy.\n\nThe full article that I am going to talk about is [here](https://arxiv.org/pdf/1604.06119.pdf). Network of Experts for Large-scale image categorization.\n\n_The trunk of the network contains convolutional layers optimized over all classes_. At a given depth, the trunk splits\ninto _separate branches_, each dedicated to discriminate a different subset of classes. _Each branch acts as an expert_ classifying a set of categories that are difficult to tell apart, _while the trunk provides common\n knowledge to all experts in the form of shared features._ The training of\n our **“network of experts”** is completely **end-to-end:** the partition of categories into disjoint subsets is learned simultaneously with the parameters\n of the network trunk and the experts are trained jointly by minimizing a single learning objective over all classes. The proposed structure\n can be built from any existing convolutional neural network (CNN). The paper demonstrate its generality by adapting 4 popular CNNs for image categorization into the form of networks of experts. They worked on CIFAR100 and ImageNet. \n\n![](/images/uploads/approach.jpg)\n\n**Fig. 1.** Our Network of Experts (NofE). Top: Training of the generalist. The generalist\r is a traditional CNN but it is optimized to partition the original set of C classes into\r K << C disjoint subsets, called specialties. Our method performs joint learning of the\r K specialties and the generalist CNN that is optimized to recognize these specialties.\r\n\n**Bottom:** The complete NofE with K expert branches. The convolutional layers of the\r generalist are used as initialization for the trunk, which ties into K separate branches,\r each responsible to discriminate the classes within a specialty. The complete model is\r trained end-to-end via backpropagation with respect to the original C classes.\r\n\nAlthough the learning scheme **involves two distinct training stages** – the\r first aimed at learning the generalist and the specialties, the second focused on\r training the experts – the final product is a unified model performing multiclass classification over the original classes, which we call “Network of Experts”\r(NofE). The training procedure is illustrated in Fig 1. The generalist is implemented in the form of a convolutional neural network (CNN) with a final\r softmax layer over K specialties, where K << C, with C denoting the original\r number of categories (Figure 1(top)).\n\n After this first training stage, the fully\r connected layers are discarded and K distinct branches are attached to the last convolutional layer of the generalist, i.e., one branch per specialty. Each branch\r is associated to a specialty and is devoted to recognize the classes within the\r specialty. This gives rise to the NofE architecture, a unified tree-structured\r network (Figure 1(bottom)). Finally, all layers of the resulting model are finetuned with respect to the original C categories by means of a global softmax\r layer that calibrates the outputs of the individual experts over the C categories.\r\n\nSo, another question comes to my mind that **Why should have generalist?** when we can use the Network of Expert directly.\n\n**the learning of our generalist serves two fundamental purposes:**\n\n**First,** _using a divide and conquer strategy it decomposes the original multiclass classification problem over C labels into K subproblems, one for each specialty._ The specialties are defined so that the act of classifying an image into\r its correct specialty is as accurate as possible. At the same time this implies\r that confusable classes are pushed into the same specialty, thus handing off the\r most challenging class-discrimination cases to the individual experts. However,\r because each expert is responsible for classification only over a subset of classes\r that are highly similar to each other, it can learn highly specialized and effective\r features for the subproblem, analogously to a human expert identifying mushrooms by leveraging features that are highly domain-specific (cap shape, stem\r type, spore color, flesh texture, etc.).\n\n**second**, the convolutional layers learned by the generalist provide an initial\r knowledge-base for all experts in the form of shared features. In our experiments\r we demonstrate that fine-tuning the trunk from this initial configuration results\r in a significant improvement over learning the network of experts from scratch\r or even learning from a set of convolutional layers optimized over the entire\r set of C labels. Thus, the subproblem decomposition does not merely simplify\r the original hard classification problem but it also produces a set of pretrained\r features that lead to better finetuning results."
---
