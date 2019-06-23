import keepService from '../services/keep.service.js'

export default {


template: `

<section class="note-item">
  <h1>{{note.title}}</h1>
            <textarea v-if="note.type==='text'" cols="30" rows="5">{{note.body}}</textarea>
            <img v-if="note.type==='img'" :src="note.url"/>
            <iframe v-if="note.type==='youtube'" width="300" height="300"
            :src="note. videoUrl">
            </iframe>
                <ui-confirm
                    confirm-button-text="Delete" deny-button-text="Keep" ref="deleteConfirm"
                    title="Delete Note"
                    type="danger"
                    @confirm="deleteNote(note.id)"
                    @deny="">
                    Are you sure you want to delete the note?
                </ui-confirm>
                <div class="keep-tool-bar">
                    <div @click.stop="showConfirm('deleteConfirm')"> <i class="far fa-trash-alt"></i> </div>
                    <div :class="{pinned: note.isPinned}" @click.stop="togglePin(note.id)"><i class="fas fa-thumbtack"></i></div>
                    <div  @click.stop="duplicateNote(note.id)"> <i class="fas fa-copy"></i> </div>
                    <div><input type="color"></div>
                </div>
    </section>

`
,

methods: {
    deleteNote(id) {
        keepService.deleteNote(id)
            .then(console.log('deleted on page - show alert'))
    },

    showConfirm(ref) {
        
        this.$refs[ref].open()   
    },

    togglePin(id) {
        keepService.togglePin(id)
        .then(console.log('pin toggled'))
    },

    duplicateNote(id) {
        keepService.duplicateNote(id)
        .then(console.log('duplicated on page - show alert'))
    },

},

data() {
    return {
    
    }
},

props: ['note'],

computed: {
   
},

}