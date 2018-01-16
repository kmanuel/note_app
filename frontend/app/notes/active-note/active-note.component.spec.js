describe('activeNote', function() {

    beforeEach(angular.mock.module('notes'));

    describe('activeNoteController', function() {

        var ctrl, noteService;

        beforeEach(inject(function($componentController, $location, $routeParams, _noteService_) {
            $routeParams.noteId = 5;
            noteService = _noteService_;
            spyOn(noteService, 'getNote').and.returnValue({"title" : "test"});
            ctrl = $componentController('activeNote');
        }));

        it('should call getNote with activeNoteId on init', function() {
            expect(ctrl.activeNote.title).toBe("test");
        });

    })

});