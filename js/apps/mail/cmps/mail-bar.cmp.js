export default {
    template: `
    <section class="mail-bar">
        <div class="mail-compose" @click="selectedFolder('compose')"><i class="fas fa-plus"></i> <span>compose</span></div>
        <ul>
            <li @click="selectedFolder('inbox')" :class="{active: inboxIsActive}" :active="activeLink"><i class="fas fa-inbox"></i> Inbox</li>
            <li @click="selectedFolder('starred')" :class="{active: starredIsActive}" :active="activeLink"><i class="fas fa-star"></i> Starred</li>
            <li @click="selectedFolder('sent')" :class="{active: sentIsActive}" :active="activeLink"><i class="fas fa-share-square"></i> Sent</li>
            <li @click="selectedFolder('trash')" :class="{active: trashIsActive}" :active="activeLink"><i class="fas fa-trash"></i> Trash</li>
        </ul>
        <ui-progress-linear color="primary" type="determinate" :progress="75"></ui-progress-linear>
    </section>
    `,
    methods: {
        selectedFolder(data) {
            this.$emit('setFolder', data)
            this.isActive = true;
            this.linkActive = data;
        }
    },
    computed: {
        activeLink() {
            if (this.linkActive === "inbox") {
                this.inboxIsActive = true;
                this.starredIsActive = false;
                this.sentIsActive = false;
                this.trashIsActive = false;
            } else if (this.linkActive === "starred") {
                this.inboxIsActive = false;
                this.starredIsActive = true;
                this.sentIsActive = false;
                this.trashIsActive = false;
            } else if (this.linkActive === "sent") {
                this.inboxIsActive = false;
                this.starredIsActive = false;
                this.sentIsActive = true;
                this.trashIsActive = false;
            } else if (this.linkActive === "trash") {
                this.inboxIsActive = false;
                this.starredIsActive = false;
                this.sentIsActive = false;
                this.trashIsActive = true;
            }
        }
    },
    data() {
        return {
            inboxIsActive: true,
            starredIsActive: false,
            sentIsActive: false,
            trashIsActive: false,
            linkActive: '',
        }
    },
}