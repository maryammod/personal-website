---
title: ' MLP, CNN, RNN Neural Network '
description: >-
  There are 3 types of Neural Nework Types that you should know about them if
  you want to start working in the area of machine learning. Let's review them
  one be one.
date: 2019-06-19T15:26:22.666Z
published: true
cover_image: /images/uploads/neural3.jpg
tags:
  - Cover Image
  - New Onw
  - Markdown
content: >-
  In previous post, we get familiar with the basic concepts of these Neural
  network types. Now we want to find the answers for these questions:


  When to Use Multilayer Perceptrons?


  When to Use Convolutional Neural Networks?


  When to Use Recurrent Neural Networks?


  What is Hybrid Network Models and its application ?


  ## **When to Use Multilayer Perceptrons?**


  Multilayer Perceptrons, or MLPs for short, are the classical type of neural
  network.


  They are comprised of one or more layers of neurons. Data is fed to the input
  layer, there may be one or more hidden layers providing levels of abstraction,
  and predictions are made on the output layer, also called the visible layer.


  MLPs are suitable for classification prediction problems where inputs are
  assigned a class or label.


  They are also suitable for regression prediction problems where a real-valued
  quantity is predicted given a set of inputs. Data is often provided in a
  tabular format, such as you would see in a CSV file or a spreadsheet.


  **Use MLPs For:**


  * Tabular datasets

  * Classification prediction problems

  * Regression prediction problems


  They are very flexible and can be used generally to learn a mapping from
  inputs to outputs.


  This flexibility allows them to be applied to other types of data. For
  example, the pixels of an image can be reduced down to one long row of data
  and fed into a MLP. The words of a document can also be reduced to one long
  row of data and fed to a MLP. Even the lag observations for a time series
  prediction problem can be reduced to a long row of data and fed to a MLP.


  As such, if your data is in a form other than a tabular dataset, such as an
  image, document, or time series, I would recommend at least testing an MLP on
  your problem. The results can be used as a baseline point of comparison to
  confirm that other models that may appear better suited add value.


  **Try MLPs On:**


  * Image data

  * Text Data

  * Time series data

  * Other types of data


  ## **When to Use Convolutional Neural Networks?**


  Convolutional Neural Networks, or CNNs, were designed to map image data to an
  output variable.


  They have proven so effective that they are the go-to method for any type of
  prediction problem involving image data as an input.


  The benefit of using CNNs is their ability to develop an internal
  representation of a two-dimensional image. This allows the model to learn
  position and scale in variant structures in the data, which is important when
  working with images.


  **Use CNNs For:**


  * Image data

  * Classification prediction problems

  * Regression prediction problems

  * More generally, CNNs work well with data that has a spatial relationship.


  The CNN input is traditionally two-dimensional, a field or matrix, but can
  also be changed to be one-dimensional, allowing it to develop an internal
  representation of a one-dimensional sequence.


  This allows the CNN to be used more generally on other types of data that has
  a spatial relationship. For example, there is an order relationship between
  words in a document of text. There is an ordered relationship in the time
  steps of a time series.


  Although not specifically developed for non-image data, CNNs achieve
  state-of-the-art results on problems such as document classification used in
  sentiment analysis and related problems.


  **Try CNNs On:**


  * Text data

  * Time series data

  * Sequence input data


  ## When to Use Recurrent Neural Networks?


  Recurrent Neural Networks, or RNNs, were designed to work with sequence
  prediction problems.


  Sequence prediction problems come in many forms and are best described by the
  types of inputs and outputs supported.


  **Some examples of sequence prediction problems include:**


  * One-to-Many: An observation as input mapped to a sequence with multiple
  steps as an output.

  * Many-to-One: A sequence of multiple steps as input mapped to class or
  quantity prediction.

  * Many-to-Many: A sequence of multiple steps as input mapped to a sequence
  with multiple steps as output.

  * The Many-to-Many problem is often referred to as sequence-to-sequence, or
  seq2seq for short.


  _RNNs in general and LSTMs in particular have received the most success when
  working with sequences of words and paragraphs, generally called natural
  language processing._


  This includes both sequences of text and sequences of spoken language
  represented as a time series. They are also used as generative models that
  require a sequence output, not only with text, but on applications such as
  generating handwriting.


  **Use RNNs For:**


  * 


  Text data


  * Speech data

  * Classification prediction problems

  * Regression prediction problems

  * Generative models


  Recurrent neural networks are not appropriate for tabular datasets as you
  would see in a CSV file or spreadsheet. They are also not appropriate for
  image data input.


  **Don’t Use RNNs For:**


  * 


  Tabular data


  * Image data


  RNNs and LSTMs have been tested on time series forecasting problems, but the
  results have been poor, to say the least. Autoregression methods, even linear
  methods often perform much better. LSTMs are often outperformed by simple MLPs
  applied on the same data.


  ## Hybrid Network Models


  A CNN or RNN model is rarely used alone.


  These types of networks are used as layers in a broader model that also has
  one or more MLP layers. Technically, these are a hybrid type of neural network
  architecture.


  Perhaps the most interesting work comes from the mixing of the different types
  of networks together into hybrid models.


  **For example,** consider a model that uses a stack of layers with _a CNN on
  the input_, _LSTM in the middle_, and _MLP at the output_. _A model like this
  can read a sequence of image inputs, such as a video, and generate a
  prediction. This is called a CNN LSTM architecture._


  The network types can also be stacked in specific architectures to unlock new
  capabilities, _such as the reusable image recognition models_ that use very
  deep CNN and MLP networks that can be added to a new LSTM model and used for
  captioning photos. Also, the encoder-decoder LSTM networks that can be used to
  have input and output sequences of differing lengths.


  It is important to **think clearly** about what you and your stakeholders
  require from the project first, then seek out a network architecture (or
  develop one) that meets your specific project needs.


  **Refrence:**


  https://machinelearningmastery.com
---

