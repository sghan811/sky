<template>
  <!-- <div class="card p-5 m-10 rounded-lg w-[500px] h-[200px] flex items-center justify-center hover:shadow-2xl">
    <img class="w-40 h-40 object-cover rounded-lg mr-5" :src="img" />
    <div class="ml-2">
      <div class="title text-neutral-200 mb-2 text-lg">{{ title }}</div>
      <div class="content text-neutral-500">{{ desc }}</div>
    </div>
  </div> -->
  <div class="post">
    <div class="texts">
      <span class="timestamp">{{ timestamp }}</span>
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <a href="/">더 알아보기 ></a>
    </div>
    <img :src="img">
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    time: String,
    title: String,
    desc: String,
    img: String
  }
}
</script>

<style scoped>
  .content {
    /* 한 줄 자르기 */
    display: inline-block;
    width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* 여러 줄 자르기 추가 스타일 */
    white-space: normal;
    line-height: 1.2;
    height: 3.6em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

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
