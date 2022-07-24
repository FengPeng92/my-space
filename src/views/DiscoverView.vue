<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo/>
            </div>
            <div class="col-9">Post List</div>
        </div>
    </ContentBase>
</template>

<script>

import ContentBase from '@/components/ContentBase.vue';
import UserInfo from '@/components/UserInfo.vue';


export default {
  name: 'DiscoverView',
  components: {
      ContentBase,
        UserInfo,
  }
}
</script>


<style scoped>
</style>