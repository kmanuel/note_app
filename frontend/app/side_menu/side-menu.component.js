angular
    .module('sideMenu')
    .component('sideMenu', {
        templateUrl: 'app/side_menu/side-menu.template.html',
        controller: ['noteService',
            function SideMenuController(noteService) {
                this.activeItem = 'notes';

                this.upload = function() {
                    console.log('upload called');
                    noteService.upload().then(
                        function success(response) {
                            console.log('uploaded successfully');
                        },
                        function error(response) {
                            console.error('upload failed');
                        }
                    )
                }

                this.setActive = function(item) {
                    this.activeItem = item;
                }

                this.isActive = function(item) {
                    return item === this.activeItem;
                }
            }]
    });