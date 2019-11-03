---
title: Tensorflow v2 vs V1
description: >-
  We’re very excited about TensorFlow 2.0 and the changes to come. TensorFlow
  has grown from a software library for deep learning to an entire ecosystem for
  all types of ML
date: 2019-11-03T05:02:41.531Z
published: true
cover_image: /images/uploads/tf2-maryam-bafandkar.png
tags:
  - Machine Learning
content: >-
  **What is Tensorflow?**


  TensorFlow is a general purpose high-performance computing library open
  sourced by Google in 2015. Since the beginning, its main focus was to provide
  high-performance APIs for building Neural Networks (NNs). However, with the
  advance of time and interest by the Machine Learning (ML) community, the lib
  has grown to a full ML ecosystem.


  **Two Significant Changes** 


  _1)**TF datasets**_


  No more of those ugly queue runners that were required for optimized training
  with large datasets. For TensorFlow 2.0, queue runners have been completely
  replaced with tf.data.


  With **tf.data**, training data is read using input pipelines in a much
  cleaner way. The API itself is simplified and far easier to use, handling in a
  similar way as the fit_generator and related flow functions in Keras.
  Convenient input from in-memory data such as Numpy arrays is also supported.


  For a tutorial on how to use tf.data for TensorFlow 2.0, see this[
  link!](https://www.tensorflow.org/guide/data)


  2)**API Cleanup**


  As TensorFlow 1.x went through development, many, many custom and contrib APIs
  popped up to try and expand the library’s functionality.


  When building a neural network in TensorFlow 1.x you have many options to
  choose from: tf.slim, tf.layers, tf.contrib.layers, and tf.keras. Beyond that,
  more custom code for debugging, math, and specific ML functions are also
  available. Needless to say, it’s become quite the mess!


  Version 2.0 has a lot of API cleanup to simplify and unify the TensorFlow API.
  Many APIs such as tf.app, tf.flags, and tf.logging are either gone or moved in
  2.0. APIs that had Keras equivalents have been completely replaced in favour
  of the much simpler Keras version.


  ****[**Sample Code Using TF V.2 for
  Biggeners**](https://www.tensorflow.org/tutorials/quickstart/beginner)****


  ****[**Sample Code Using TF V.2 for
  Experts**](https://www.tensorflow.org/tutorials/quickstart/advanced)****
---

