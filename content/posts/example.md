---
title: A Quick Introduction to Neural Networks
description: >-
  An Artificial Neural Network (ANN) is a computational model that is inspired
  by the way biological neural networks in the human brain process information.
  Artificial Neural Networks have generated a lot of excitement in Machine
  Learning research and industry, thanks to many breakthrough results in speech
  recognition, computer vision and text processing.
date: 2019-01-07T00:00:00.000Z
published: true
cover_image: /images/uploads/screen-shot-2016-08-09-at-3-42-21-am.png
tags:
  - Markdown
  - Cover Image
  - New Onw
content: "An Artificial Neural Network (ANN) is a computational model that is inspired by the way biological neural networks in the human brain process information. Artificial Neural Networks have generated a lot of excitement in Machine Learning research and industry, thanks to many breakthrough results in speech recognition, computer vision and text processing. In this blog post I will try to develop an understanding of   Artificial Neural Networks and show you the practical project of ANN that I have worked on it. I compared different architecture of ANN. \n\nA Single Neuron\n\nThe basic unit of computation in a neural network is the neuron, often called a node or unit. It receives input from some other nodes, or from an external source and computes an output. Each input has an associated weight (w), which is assigned on the basis of its relative importance to other inputs. The node applies a function f (defined below) to the weighted sum of its inputs as shown in Figure 1 below:\n\n![ANN - Maryam Bafandkar - Machine learning](/images/uploads/screen-shot-2016-08-09-at-3-42-21-am.png \"Figure 1: a single neuron\")\n\nThe above network takes numerical inputs X1 and X2 and has weights w1 and w2 associated with those inputs. Additionally, there is another input 1 with weight b (called the Bias) associated with it. We will learn more details about role of the bias later.\r\n\n\r\n\nThe output Y from the neuron is computed as shown in the Figure 1. The function f is non-linear and is called the Activation Function. The purpose of the activation function is to introduce non-linearity into the output of a neuron. This is important because most real world data is non linear and we want neurons to learn these non linear representations.\r\n\n\r\n\nEvery activation function (or non-linearity) takes a single number and performs a certain fixed mathematical operation on it \\[2]. There are several activation functions you may encounter in practice:\r\n\n\r\n\nSigmoid: takes a real-valued input and squashes it to range between 0 and 1\r\n\n```\nσ(x) = 1 / (1 + exp(−x))\r\n```\n\n\r\n\ntanh: takes a real-valued input and squashes it to the range \\[-1, 1]\r\n\n```\ntanh(x) = 2σ(2x) − 1\r\n```\n\n\r\n\nReLU: ReLU stands for Rectified Linear Unit. It takes a real-valued input and thresholds it at zero (replaces negative values with zero)\r\n\n```\nf(x) = max(0, x)\r\n```\n\n\r\n\nThe below figures \\[2]  show each of the above activation functions.\n\n![Nonliterary functions, ANN , machine learning, maryam bafandkar ](/images/uploads/screen-shot-2016-08-08-at-11-53-41-am.png \"Figure 2: different activation functions\")"
---

