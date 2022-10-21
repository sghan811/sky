<template>
  <Nav />

  <!-- <div class="posts">
    <div class="post">
      <div class="texts">
        <span class="timestamp">{{ mainPost.timestamp }}</span>
        <h1>{{ mainPost.title }}</h1>
        <p>{{ mainPost.description }}</p>
      </div>
      <img :src="mainPost.imageUrl">
    </div>
    <div class="popular-posts">
      <h1>Popular Posts</h1>
      <div class="posts-container">
        <div class="post" v-for="post in popularPosts">
          <div class="texts">
            <span class="timestamp">{{ post.timestamp }}</span>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <a>더 알아보기 ></a>
          </div>
          <img :src="post.imageUrl">
        </div>
      </div>
    </div>
  </div> -->

  <div class="posts">
    <Card v-for="item in posts" :timestamp="item.timestamp" :title=item.title :desc=item.desc :img="item.img" />
  </div>

</template>

<script>
import Nav from '../components/Nav.vue'
import Card from '../components/Card.vue'

import axios from 'axios'

export default {
  name: 'Index',
  components: {
    Nav,
    Card
  },
  data() {
    return {
      posts: [
        {
          timestamp: "2099-10-15 15:33",
          title: "디스코드 새로운 언론사 등장",
          desc: "디스코드에 새로운 언론사가 등장하였다. 이름은 Discord News이고, 한국인 운영자가 운영하고 있다. 많은 사람들이 이에 대해 긍정적인 의견을 보내고 있으며, 운영사는 이러한 상황에 많은 성원에 감사를 표하고 부족한 점이 많으니 피드백을 부탁한다는 말을 남겼다.",
          img: "https://media.discordapp.net/attachments/1017848652640829493/1030484926551818260/IU.png",
        },
        {
          timestamp: "2099-10-15 12:12",
          title: "디스코드 신기능 발표",
          desc: "디스코드에서 신기능인 음성 변조 기능을 발표하였다. 많은 유저들이 건의한 사항인 만큼이나 폭발적인 반응이 있었고, 디스코드의 주가 또한 상승하였다.",
          img: "https://img.freepik.com/premium-vector/discord-modern-logo_578229-177.jpg?w=2000",
        },
        {
          timestamp: "2099-10-12 03:20",
          title: "디스코드 새로운 취약점 발견",
          desc: "유명 개발사 라쿤의 보안전문가팀은 디스코드의 새로운 취약점 2가지를 발견하였다. 그 중 하나는 유저 컨트롤을 완벽히 빼앗을 수 있는 고위험군 취약점으로, 유저들은 빠른 조치를 요구하고 있다.",
          img: "data:image/jpeg;base64,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",
        }
      ]
    }
  },
  mounted() {
    axios.get('/api/v1/post/index.js')
  }
}
</script>

<style>
.posts {
  padding: 80px 30%;
}

.posts > div {
  margin-bottom: 50px;
  padding-top: 50px;
  border-top: 1px #909090 solid;
}

.posts > div h1 {
  margin-top: 0;
}

.posts > div:first-child {
  border-top: none;
  padding-top: 0;
}

.post {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.post img {
  margin-left: 20px;
  border-radius: 30px;
  width: 250px;
}

.timestamp {
  font-size: 12px;
}

.posts a {
  text-decoration: none;
 color: #909090;
}

.post h2 {
  margin-top: 0;
}

.post {
  margin-bottom: 30px;
}

.post:last-child {
  margin-bottom: 0;
}
</style>