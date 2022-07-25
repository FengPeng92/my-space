<template>
    <div class="card edit-field">
        <div class="card-body">
            <label for="edit-post" class="form-label">Your Post</label>
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button @click="submit_post" type="button" class="btn btn-primary btn-sm">submit</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "UserWrite",

    setup(props, context) {
        let content = ref('');

        const submit_post = () => {
            context.emit('submit_post', content.value);
            content.value = "";
        }

        return {
            content,
            submit_post,
        }
    }
}
</script>

<style scoped>
.edit-field {
    margin-top: 20px;
}
button {
    margin-top: 10px;
}
</style>