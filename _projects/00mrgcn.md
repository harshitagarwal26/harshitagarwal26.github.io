---
name: Siamese Networks for One-shot Image Recognition
tools: [Tensorflow, Python]
image: /assets/img/mrgcn0.jpg
description: Developed and implemented deep learning models to address the one-shot image recognition problem using the omniglot dataset.
---
# Siamese Networks for One-Shot Image Recognition
##### Supervisor: <a href = "https://universe.bits-pilani.ac.in/pilani/surekha/Profile"> Dr. Surekha Bhanot</a>

<br>
One-shot image recognition can be useful for signature verification, enabling accurate authentication by comparing a new signature to just a single reference signature on file. To facilitate this, we propose a deep learning based
one-shot image recognition model trained on Omniglot dataset.

{% include elements/figure.html image="/assets/img/snn.png" caption="Overall architecture of Siamese Neural Networks" %}

  We demonstrate the effectiveness of the proposed model on a neo-nazi underground forum, IronMarch. </p>
  We first modeled the hackforum into a homogeneous graph of users, where the multiple edges between users are captured based on their involvement in private conversations, group discussions and other miscellaneous activities. 
  In addition, we also encode the textual content shared among users' in form of distributed feature representation generated from BERT.
  To obtain ground truth labels for training data, we propose a hypothesis to calculate the scores for each user based on the quality and quantity of their involvement in the underground forum. 
  The proposed framework jointly embeds the users' and multi relational information to learn the nodes embeddings in the graph. 
  We demonstrate the effectiveness of the proposed model on a neo-nazi underground forum, IronMarch.

  1. Firstly, we loaded the images by first looping over all the languages and fetching all the images for each alphabet in every language one by one. This was done for both test and validation sets.
  2. Then we randomly selected languages for each batch and in every language, formed pairs of images with target of 1 if they belong to the same alphabet and 0 if they are of different alphabets.


<br>

### Technical Details
<ul>
<li>Language: Python</li>
<li>Semi-Supervised Learning </li>
<li>BERT for Language Modeling</li>
<li>Framework: Keras and Tensorflow</li>
<li>Model: Graph Convolutional Layer</li>
<li>Loss Function: Mean Squared Error</li>
</ul>

<br>

### Results
We conducted an ablation study on the model
  parameters to generate the best results and achieved
  a classification accuracy of 82% which validates the
  proposed hypothesis for score computation and class
  labelling. To establish the robustness of our model, we
  compare its performance against state-of-art models.
  Though we used an underground forum as a showcase,
  the proposed model can be implemented to identify
  influential users' on other social media platforms.

<p class="text-center">
{% include elements/button.html link="https://github.com/nikita-0209/kad_mrgcn_public" text="View Code" %}
</p>

<p class="text-center">
{% include elements/button.html link="https://ieeexplore.ieee.org/document/9671446" text="View Paper" %}
</p>
