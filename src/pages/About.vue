<template>
  <Layout>
    <section class="about-wrapper pad-top-50">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="page-title pad-bottom-50">
              <h1><b>About Maryam</b></h1>
            </div>
          </div>
          <div class="col-sm-12 mb50">
            <img src="https://via.placeholder.com/1200x400.png" alt="video" />
            <a href="#" class="video-play"><i class="fa fa-play"></i></a>
          </div>
          <div class="col-sm-12">
            <p>
              Hi, I’m Maryam Bafandkar. I am a second-year graduate student in
              the Applied Computer Science program at the University of
              Winnipeg. Hopefully, I will graduate before 2021. I like my
              student life, though. Full-time learning and researching and
              working with well-educated professors and researchers.
            </p>
            <div class="icon-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p>
              Currently, I am doing my research in an amazing and big
              <span class="font-weight-bold">Machine Learning</span> project
              with the University of Winnipeg, University of Saskatoon and other
              two big companies. If you are interested to know more about the
              project I am working on, you can read
              <a
                target="_blank"
                rel="nofollow"
                href="https://www.uwinnipeg.ca/physics/news/2019/02/uwinnipeg-lands-250,000-weston-seeding-food-innovation-grant.html"
                ><span class="font-italic">this page.</span></a
              >
            </p>
            <p>
              Since I am learning new things and finding some new experience in
              Machine Learning areas, I decided to create my personal website
              where I can share some important and practical things, I know
              about Artificial Intelligence and Machine Learning.
            </p>
            <p>
              Since my research area is related to plant classification using
              machine learning algorithms, I invented a new CNN architecture
              that is specifically used for plants dataset, called “Generalist
              and Specialist Algorithm”, I’ll write a post to explain it in
              detail.
            </p>

            <p>
              I also like to make open-source projects, all of which can be
              found on <strong>GitHub</strong>. A few I'm proud of are:
            </p>
            <ul class="mb-5 ml-5">
              <li>
                Implemented and improved KNN algorithm using parallel
                programming
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/maryammod/parallel-programming-final-project"
                  >https://github.com/maryammod/parallel-programming-final-project</a
                >
              </li>
              <li>
                Improved Artificial Neural Network to classify flowers dataset
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/maryammod/ANN"
                  >https://github.com/maryammod/ANN</a
                >
              </li>
              <li>Improved branch Convolutional Nural network model</li>
              <li>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/maryammod/B-CNN"
                  >https://github.com/maryammod/B-CNN</a
                >
              </li>
            </ul>

            <p>Here are a few random things I like:</p>
            <ul class="mb-5 ml-5">
              <li>
                📚 <strong>Books:</strong> follow your heart, A Song of Ice and
                Fire, Demon-Haunted World
              </li>
              <li>
                🎵 <strong>Songs:</strong> Way too many to even get close to the
                listing, but here are a random three: La Noyee (Yann Tiersen),
                Bemyself (Parcels), I Promised Myself (Nick Kamen)
              </li>
              <li>
                🎮 <strong>Sport:</strong> Climbing the mountain, Swimming
              </li>
            </ul>
            <p>
              I also like hiking and biking, I've done a lot of solo travel
              (around Asia and America) and I can speak Persian. My favourite
              instrument is the guitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
};
</script>

<style lang="css" scoped>
.icon-header{
  width: 30px;
  height: 30px;
  color: #74947d;
}
</style>
