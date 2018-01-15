describe('sideMenu', function () {

    beforeEach(angular.mock.module('sideMenu'));

    describe('SideMenuController', function () {
        var ctrl, noteService;

        beforeEach(inject(function ($componentController, _noteService_) {
            ctrl = $componentController('sideMenu');
            noteService = _noteService_;
        }));

        it('should have notes as default activeItem', function () {
            expect(ctrl.activeItem).toBe('notes');
        });

        it('should have "notebooks" as activeItem after setting it active', function() {
            ctrl.setActive('notebooks');
            expect(ctrl.activeItem).toBe('notebooks');
        });

        it('should return true when isActive("notes")', function() {
            expect(ctrl.isActive('notes')).toBe(true);
        });

        it('should switch isActive when changing active item', function() {
            expect(ctrl.isActive('notes')).toBe(true);
            ctrl.setActive('notebooks');
            expect(ctrl.isActive('notes')).toBe(false);
            expect(ctrl.isActive('notebooks')).toBe(true);
        });

        it('should call noteService when uploading', function() {
            var fakeHttpPromise = {
                then: function() {
                }
            };
            spyOn(noteService, 'upload').and.returnValue(fakeHttpPromise);
            ctrl.upload();
            expect(noteService.upload).toHaveBeenCalled();
        });

    });


});