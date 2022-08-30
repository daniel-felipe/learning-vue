export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignment" placeholder="New assignments..." class="p-2 w-9/12" />
                <button type="submit" class="bg-white p-2 border-l" class="w-3/12">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}