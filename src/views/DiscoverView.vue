<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo @follow="follow" @unfollow="unfollow" :user="user"/>
                <UserWrite @submit_post="submit_post"/>
            </div>
            <div class="col-9">
                <UserPosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>

<script>

import ContentBase from '@/components/ContentBase.vue'; 
import UserInfo from '@/components/UserInfo.vue';
import UserPosts from '../components/UserPosts.vue';
import UserWrite from '@/components/UserWrite.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';


export default {
  name: 'DiscoverView',
  components: {
    ContentBase,
    UserInfo,
    UserPosts,
    UserWrite,
},
  setup() {
      const route = useRoute();
      const userId = route.params.userId;
      console.log(userId)
      const user = reactive({
          username: "Feng Peng",
          lastname: "Peng",
          firstname: "Feng",
          followers: 0,
          is_followed: false,
      });

      const posts = reactive({
          count: 3,
          posts: [
              {
                  id: 1,
                  userId: 1,
                  content: "Happy 1",
              },
              {
                  id: 2,
                  userId: 1,
                  content: "Happy 2",
              },
              {
                  id: 3,
                  userId: 1,
                  content: "Happy 3",
              }
          ]
      })

      const follow = () => {
          if (user.is_followed) return;
          user.is_followed = true;
          user.followers++;
      }

      const unfollow = () => {
          if (!user.is_followed) return;
          user.is_followed = false;
          user.followers--;
      }

      const submit_post = (content) => {
          posts.count++;
          posts.posts.unshift({
              id: posts.count,
              userId: 1,
              content: content,
          })
      }
      return {
          user,
          follow,
          unfollow,
          posts,
          submit_post,
          route
      }
  }
  
}
</script>


<style scoped>
</style>