describe('itemList', function () {

    beforeEach(angular.mock.module('itemList'));

    describe('ItemListController', function () {
        var ctrl, noteService;

        beforeEach(inject(function ($componentController, $routeParams, _noteService_) {

            $routeParams.noteId = 2;
            noteService = _noteService_;
            spyOn(noteService, 'getNotes');
            ctrl = $componentController('itemList');
        }));

        it('should fetch notes from noteService on init', function() {
            expect( noteService.getNotes).toHaveBeenCalled();
        });

        it('should identify activeNote', function() {
            var isActive = ctrl.isActiveNote(2);
            expect(isActive).toBe(true);
        });

        it('should identify not activeNote', function() {
           var isActive = ctrl.isActiveNote(3);
           expect(isActive).toBe(false);
        });

        it('should call noteService delete on deleteNote', function() {
            spyOn(noteService, 'delete');
            ctrl.deleteNote(2);
            expect(noteService.delete).toHaveBeenCalled();
        });

        it('should return active class for active note', function() {
            expect(ctrl.classForNoteId(2)).toBe('active');
        });

        it('should not return active class for non-active note', function() {
            expect(ctrl.classForNoteId(3)).toBe('');
        });
    });





});