const routes = [{
    path: '/',
        component: resolve => require(['./default.vue'], resolve),
    children: [{
        path: '',
        component: resolve => require(['./components/pages/login3.vue'], resolve),
        meta: {
            title: 'LOGIN PAGE',
            breadcrumb: [{
                //text: '<i class="ti-home"></i> Dashboard 1',
                href: '#/login3',
            }]
        }
    }, {
        path: 'index2',
        component: resolve => require(['./components/pages/index2.vue'], resolve),
        meta: {
            title: 'Dashboard2',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard 2',
                href: '#/index2',
            }]
        }
    },{
        path: 'index',
        component: resolve => require(['./components/pages/index.vue'], resolve),
        meta: {
            title: 'Dashboard1',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard 1',
                href: '#/index',
            }]
        }
    },
     {
        path: 'form-elements',
        component: resolve => require(['./components/pages/form-elements.vue'], resolve),
        meta: {
            title: 'Form Elements',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            }, {
                text:'Features',
                href:'#',
            },{
                text: 'Form Elements',
                href: '#/form-elements'
            }]
        }
    }, {
        path: 'form-validations',
        component: resolve => require(['./components/pages/form-validations.vue'], resolve),
        meta: {
            title: 'Form Validations',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#'
            }, {
                text: 'Form Validations',
                href: '#/form-validations'
            }]
        }
    }, {
        path: 'jstree',
        component: resolve => require(['./components/pages/jstree.vue'], resolve),
        meta: {
            title: 'JS Tree',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#'
            }, {
                text: 'JS Tree',
                href: '#/jstree'
            }]
        }
    },{
        path: 'form_layouts',
        component: resolve => require(['./components/pages/form-layouts.vue'], resolve),
        meta: {
            title: 'Form Layouts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
               text:'Features',
                href:'#',
            }, {
                text: 'Form Layouts',
                href: '#/form_layouts'
            }]
        }
    }, {
        path: 'complex_forms',
        component: resolve => require(['./components/pages/complex_forms.vue'], resolve),
        meta: {
            title: 'Complex Forms',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Complex Forms',
                href: '#/complex_forms'
            }]
        }
    }, {
        path: 'realtime_form',
        component: resolve => require(['./components/pages/realtime_form.vue'], resolve),
        meta: {
            title: 'Realtime Forms',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Realtime Form',
                href: '#/realtime_form'
            }]
        }
    }, {
        path: 'radio_check',
        component: resolve => require(['./components/pages/radio_checkboxes.vue'], resolve),
        meta: {
            title: 'Radio and Checkboxes',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Radio and Checkbox',
                href: '#/radio_check'
            }]
        }
    }, {
        path: 'form_editors',
        component: resolve => require(['./components/pages/form_editors.vue'], resolve),
        meta: {
            title: 'Form Editors',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Form Editors',
                href: '#/form_editors'
            }]
        }
    }, {
        path: 'form_wizards',
        component: resolve => require(['./components/pages/form_wizards.vue'], resolve),
        meta: {
            title: 'Form Wizards',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Form Wizards',
                href: '#/form_wizards'
            }]
        }
    }, {
        path: 'dropdowns',
        component: resolve => require(['./components/pages/dropdowns.vue'], resolve),
        meta: {
            title: 'Dropdowns',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Dropdowns',
                href: '#/dropdowns'
            }]
        }
    }, {
        path: 'date_pickers',
        component: resolve => require(['./components/pages/date_pickers.vue'], resolve),
        meta: {
            title: 'Date Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Date Picker',
                href: '#/date_picker'
            }]
        }
    }, {
        path: 'advanced_date_pickers',
        component: resolve => require(['./components/pages/advanced_date_pickers.vue'], resolve),
        meta: {
            title: 'Advanced Date Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Advanced Date Pickers',
                href: '#/advanced_data_pickers'
            }]
        }
    }, {
        path: 'vue_multiselect',
        component: resolve => require(['./components/pages/vue_multiselect.vue'], resolve),
        meta: {
            title: 'Vue Multiselect',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components'
            }, {
                text: 'Vue Multiselect',
                href: '#/vue_multiselect'
            }]
        }
    }, {
        path: 'vue_slider',
        component: resolve => require(['./components/pages/vue_slider.vue'], resolve),
        meta: {
            title: 'Vue Slider',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Vue Slider',
                href: '#/vue_slider'
            }]
        }
    }, {
        path: 'vscroll',
        component: resolve => require(['./components/pages/vscroll.vue'], resolve),
        meta: {
            title: 'Vscroll',
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/vscroll">Vue Slider</a></li>`
        }
    }, {
        path: 'general_components',
        component: resolve => require(['./components/pages/general_components.vue'], resolve),
        meta: {
            title: 'General Components',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'General Components',
                href: '#/general_components '
            }]
        }
    }, {
        path: 'buttons',
        component: resolve => require(['./components/pages/buttons.vue'], resolve),
        meta: {
            title: 'Buttons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Buttons',
                href: '#/buttons'
            }]
        }
    }, {
        path: 'advanced_modals',
        component: resolve => require(['./components/pages/advanced_modals.vue'], resolve),
        meta: {
            title: 'Advanced Modals',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Advanced Modals',
                href: '#/advanced_modals'
            }]
        }
    }, {
        path: 'tabs_accordions',
        component: resolve => require(['./components/pages/tabs_accordions.vue'], resolve),
        meta: {
            title: 'Tabs Accordions',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Tabs and Accordions',
                href: '#/tabs_accordions'
            }]
        }
    }, {
        path: 'font_icons',
        component: resolve => require(['./components/pages/font_icons.vue'], resolve),
        meta: {
            title: 'Font Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Font Icons',
                href: '#/font_icons'
            }]
        }
    }, {
        path: 'themify_icons',
        component: resolve => require(['./components/pages/themify_icons.vue'], resolve),
        meta: {
            title: 'Themify Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Themify Icons',
                href: '#/themify_icons'
            }]
        }
    }, {
        path: 'fontawesome_icons',
        component: resolve => require(['./components/pages/fontawesome_icons.vue'], resolve),
        meta: {
            title: 'Fontawesome Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Font Awesome Icons',
                href: '#/fontawesome_icons'
            }]
        }
    }, {
        path: 'simple_line_icons',
        component: resolve => require(['./components/pages/simple_line_icons.vue'], resolve),
        meta: {
            title: 'Simple Line Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Simple Line Icons',
                href: '#/simple_line_icons'
            }]
        }
    }, {
        path: 'timeline',
        component: resolve => require(['./components/pages/timeline.vue'], resolve),
        meta: {
            title: 'Timeline',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Timeline',
                href: '#/timeline'
            }]
        }
    }, {
        path: 'pickers',
        component: resolve => require(['./components/pages/pickers.vue'], resolve),
        meta: {
            title: 'Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Pickers',
                href: '#/pickers'
            }]
        }
    },{
        path: 'color_pickers',
        component: resolve => require(['./components/pages/color_pickers.vue'], resolve),
        meta: {
            title: 'Color Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Color Pickers',
                href: '#/color_pickers'
            }]
        }
    }, {
        path: 'grid_layout',
        component: resolve => require(['./components/pages/grid_layout.vue'], resolve),
        meta: {
            title: 'Grid Layout',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Grid layout',
                href: '#/grid_layout'
            }]
        }
    }, {
        path: 'tags_input',
        component: resolve => require(['./components/pages/tags_input.vue'], resolve),
        meta: {
            title: 'Tags Input',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Tags Input',
                href: '#/tags_input'
            }]
        }
    }, {
        path: 'nestable_list',
        component: resolve => require(['./components/pages/nestable_list.vue'], resolve),
        meta: {
            title: 'Nestable List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Nested List',
                href: '#/nested_list'
            }]
        }
    }, {
        path: 'sweet_alert',
        component: resolve => require(['./components/pages/sweet_alert.vue'], resolve),
        meta: {
            title: 'Sweet Alert',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Sweet Alert',
                href: '#/sweet_alert'
            }]
        }
    }, {
        path: 'toastr_notifications',
        component: resolve => require(['./components/pages/toastr_notifications.vue'], resolve),
        meta: {
            title: 'Toastr Notifications',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Toastr Notification',
                href: '#/toastr_notifications'
            }]
        }
    }, {
        path: 'draggable_portlets',
        component: resolve => require(['./components/pages/draggable_portlets.vue'], resolve),
        meta: {
            title: 'Draggable Portlets',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Draggable Portlets',
                href: '#/draggable_portlets'
            }]
        }
    }, {
        path: 'transitions',
        component: resolve => require(['./components/pages/transitions.vue'], resolve),
        meta: {
            title: 'Transitions',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Tranisitions',
                href: '#/transitions'
            }]
        }
    }, {
        path: 'widgets',
        component: resolve => require(['./components/pages/widgets.vue'], resolve),
        meta: {
            title: 'Widgets',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Widgets',
                href: '#/widgets1'
            }]
        }
    }, {
        path: 'simple_tables',
        component: resolve => require(['./components/pages/simple_tables.vue'], resolve),
        meta: {
            title: 'Simple Tables',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'DataTables',
                href: '#',
            }, {
                text: 'Simple Tables',
                href: '#/simple_tables'
            }]
        }
        }, {
            path: 'advanced-tables',
            component: resolve => require(['./components/pages/advanced_tables.vue'], resolve),
            meta: {
                title: 'DataTables',
                breadcrumb: [{
                    text: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    text: 'DataTables',
                    href: '#',
                }, {
                    text: 'Advanced Tables',
                    href: '#/advanced-tables'
                }]
            }
        }, {
        path: 'bootstrap_tables',
        component: resolve => require(['./components/pages/bootstrap_tables.vue'], resolve),
        meta: {
            title: 'Bootstrap Tables',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'DataTables',
                href: '#',
            }, {
                text: 'Bootstrap Tables',
                href: '#/bootstrap_tables'
            }]
        }
    }, {
        path: 'flot_charts',
        component: resolve => require(['./components/pages/flot_charts.vue'], resolve),
        meta: {
            title: 'Flot Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Flot Charts',
                href: '#/flot_charts'
            }]
        }
    }, {
        path: 'nvd3_charts',
        component: resolve => require(['./components/pages/nvd3_charts.vue'], resolve),
        meta: {
            title: 'NVD3 Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'NVD3 Charts',
                href: '#/nvd3_charts'
            }]
        }
    },{
        path: 'frappe_charts',
        component: resolve => require(['./components/pages/frappe_charts.vue'], resolve),
        meta: {
            title: 'Frappe Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Frappe Charts',
                href: '#/frappe_charts'
            }]
        }
    }, {
        path: 'circle_sliders',
        component: resolve => require(['./components/pages/circle_sliders.vue'], resolve),
        meta: {
            title: 'Circle Sliders',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Circle Sliders',
                href: '#/circle_sliders'
            }]
        }
    }, {
        path: 'chartist',
        component: resolve => require(['./components/pages/chartist.vue'], resolve),
        meta: {
            title: 'Chartist Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Chartist Charts',
                href: '#/chartist'
            }]
        }
    }, {
        path: 'calendar',
        component: resolve => require(['./components/pages/calendar.vue'], resolve),
        meta: {
            title: 'Calendar',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Calendar',
                href: '#',
            }, {
                text: 'Calendar',
                href: '#/calendar'
            }]
        }
    }, {
        path: 'masonry_gallery',
        component: resolve => require(['./components/pages/masonry_gallery.vue'], resolve),
        meta: {
            title: 'Masonry Gallery',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Masonry Gallery',
                href: '#/masonry_gallery'
            }]
        }
    }, {
        path: 'dropify',
        component: resolve => require(['./components/pages/dropify.vue'], resolve),
        meta: {
            title: 'Dropify',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Dropify',
                href: '#/dropify'
            }]
        }
    }, {
        path: 'image_hover',
        component: resolve => require(['./components/pages/image_hover.vue'], resolve),
        meta: {
            title: 'Image Hover',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Hover',
                href: '#/image_hover'
            }]
        }
    }, {
        path: 'image_filter',
        component: resolve => require(['./components/pages/image_filter.vue'], resolve),
        meta: {
            title: 'Image Filter',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Filter',
                href: '#/image_filter'
            }]
        }
    }, {
        path: 'image_magnifier',
        component: resolve => require(['./components/pages/image_magnifier.vue'], resolve),
        meta: {
            title: 'Image Magnifier',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Magnifier',
                href: '#/image_magnifier'
            }]
        }
    }, {
        path: 'gmaps',
        component: resolve => require(['./components/pages/gmaps.vue'], resolve),
        meta: {
            title: 'Google Maps',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Maps',
                href: '#',
            }, {
                text: 'Google Maps',
                href: '#/gmaps'
            }]
        }
    }, {
        path: 'vector_maps',
        component: resolve => require(['./components/pages/vector_maps.vue'], resolve),
        meta: {
            title: 'Vector Maps',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Maps',
                href: '#',
            }, {
                text: 'Vector Maps',
                href: '#/vector_maps'
            }]
        }
    }, {
        path: 'index',
        component: resolve => require(['./components/pages/users/index.vue'], resolve),
        meta: {
            title: 'Users List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Users List',
                href: '#users/index'
            }]
        }
    }, {
        path: 'add',
        component: resolve => require(['./components/pages/users/add.vue'], resolve),
        meta: {
            title: 'Users Add',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Users Add',
                href: '#users/add'
            }]
        }
    }, {
        path: 'edit',
        component: resolve => require(['./components/pages/users/edit.vue'], resolve),
        meta: {
            title: 'Users Edit',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Users Edit',
                href: '#users/edit'
            }]
        }
    }, {
        path: 'delete',
        component: resolve => require(['./components/pages/users/delete.vue'], resolve),
        meta: {
            title: 'Users List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Users Delete',
                href: '#users/delete'
            }]
        }
    }, {
        path: 'index_categorie',
        component: resolve => require(['./components/pages/categories/index.vue'], resolve),
        meta: {
            title: 'Categories List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Categories',
                href: '#',
            }, {
                text: 'Categories List',
                href: '#/index_categorie'
            }]
        }
    }, {
        path: 'add_categorie',
        component: resolve => require(['./components/pages/categories/add.vue'], resolve),
        meta: {
            title: 'Add New Categorie',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Categories',
                href: '#',
            }, {
                text: 'Add New Categorie',
                href: '#/add_categorie'
            }]
        }
    }, {
        path: 'edit_categorie',
        component: resolve => require(['./components/pages/categories/edit.vue'], resolve),
        meta: {
            title: 'Edit New Categorie',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Categories',
                href: '#',
            }, {
                text: 'Edit New Categorie',
                href: '#/edit_categorie'
            }]
        }
    }, {
        path: 'delete_categorie',
        component: resolve => require(['./components/pages/categories/delete.vue'], resolve),
        meta: {
            title: 'Delete Categorie',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Categories',
                href: '#',
            }, {
                text: 'Delete Categorie',
                href: '#/delete_categorie'
            }]
        }
    },
    {
        path: 'index_produit',
        component: resolve => require(['./components/pages/produits/index.vue'], resolve),
        meta: {
            title: 'Produit List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Produits',
                href: '#',
            }, {
                text: 'Produit  List',
                href: '#/index_produit'
            }]
        }
    },
    {
        path: 'add_produit',
        component: resolve => require(['./components/pages/produits/add.vue'], resolve),
        meta: {
            title: 'Add New Produit ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Produits',
                href: '#',
            }, {
                text: 'Add New Produit',
                href: '#/add_produit'
            }]
        }
    },
    {
        path: 'edit_produit',
        component: resolve => require(['./components/pages/produits/edit.vue'], resolve),
        meta: {
            title: 'Edit Produit ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Produits',
                href: '#',
            }, {
                text: 'Edit Produit',
                href: '#/edit_produit'
            }]
        }
    },
    {
        path: 'delete_produit',
        component: resolve => require(['./components/pages/produits/delete.vue'], resolve),
        meta: {
            title: 'Delete Produit ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Produits',
                href: '#',
            }, {
                text: 'Delete Produit',
                href: '#/delete_produit'
            }]
        }
    },
    {
        path: 'index_client',
        component: resolve => require(['./components/pages/clients/index.vue'], resolve),
        meta: {
            title: 'Client List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Clients',
                href: '#',
            }, {
                text: 'Produit  List',
                href: '#/index_client'
            }]
        }
    },
    {
        path: 'add_client',
        component: resolve => require(['./components/pages/clients/add.vue'], resolve),
        meta: {
            title: 'Add New Client ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Clients',
                href: '#',
            }, {
                text: 'Add New Client',
                href: '#/add_client'
            }]
        }
    },
    {
        path: 'edit_client',
        component: resolve => require(['./components/pages/clients/edit.vue'], resolve),
        meta: {
            title: 'Edit Client ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Clients',
                href: '#',
            }, {
                text: 'Edit Client',
                href: '#/edit_client'
            }]
        }
    },
    {
        path: 'delete_client',
        component: resolve => require(['./components/pages/clients/delete.vue'], resolve),
        meta: {
            title: 'Delete Client ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Clients',
                href: '#',
            }, {
                text: 'Delete Client',
                href: '#/delete_client'
            }]
        }
    },
    {
        path: 'index_fournisseur',
        component: resolve => require(['./components/pages/fournisseurs/index.vue'], resolve),
        meta: {
            title: 'Founisseur List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Fournisseurs',
                href: '#',
            }, {
                text: 'Produit  List',
                href: '#/index_fournisseur'
            }]
        }
    },
    {
        path: 'add_fournisseur',
        component: resolve => require(['./components/pages/fournisseurs/add.vue'], resolve),
        meta: {
            title: 'Add New Fournisseur ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Fournisseurs',
                href: '#',
            }, {
                text: 'Add New Fournisseur',
                href: '#/add_fournisseur'
            }]
        }
    },
    {
        path: 'edit_fournisseur',
        component: resolve => require(['./components/pages/fournisseurs/edit.vue'], resolve),
        meta: {
            title: 'Edit Fournisseur ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Fournisseurs',
                href: '#',
            }, {
                text: 'Edit Fournisseur',
                href: '#/edit_fournisseur'
            }]
        }
    },
    {
        path: 'delete_fournisseur',
        component: resolve => require(['./components/pages/fournisseurs/delete.vue'], resolve),
        meta: {
            title: 'Delete Fournisseur ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Founisseurs',
                href: '#',
            }, {
                text: 'Delete Fournisseur',
                href: '#/delete_fournisseur'
            }]
        }
    },
    {
        path: 'add_approvisionnement',
        component: resolve => require(['./components/pages/approvisionnements/add.vue'], resolve),
        meta: {
            title: 'Add Approvisionnement ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Approvisionnement',
                href: '#',
            }, {
                text: 'Add Approvisionnement',
                href: '#/add_approvisionnement'
            }]
        }
    },
    {
        path: 'index_approvisionnement',
        component: resolve => require(['./components/pages/approvisionnements/index.vue'], resolve),
        meta: {
            title: 'Index Approvisionnement ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Approvisionnement',
                href: '#',
            }, {
                text: 'Index Approvisionnement',
                href: '#/index_approvisionnement'
            }]
        }
    },
    {
        path: 'edit_approvisionnement',
        component: resolve => require(['./components/pages/approvisionnements/edit.vue'], resolve),
        meta: {
            title: 'edit Approvisionnement ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Approvisionnement',
                href: '#',
            }, {
                text: 'edit Approvisionnement',
                href: '#/edit_approvisionnement'
            }]
        }
    },
    {
        path: 'delete_approvisionnement',
        component: resolve => require(['./components/pages/approvisionnements/delete.vue'], resolve),
        meta: {
            title: 'Delete Approvisionnement',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Approvisionnement',
                href: '#',
            }, {
                text: 'Delete Approvisionnement',
                href: '#/delete_approvisionnement'
            }]
        }
    },
    {
        path: 'add_commande',
        component: resolve => require(['./components/pages/commandes/add.vue'], resolve),
        meta: {
            title: 'Add Commande ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Commande',
                href: '#',
            }, {
                text: 'Add Commande',
                href: '#/add_commande'
            }]
        }
    },
    {
        path: 'index_commande',
        component: resolve => require(['./components/pages/commandes/index.vue'], resolve),
        meta: {
            title: 'Index commande ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'commande',
                href: '#',
            }, {
                text: 'Index commande',
                href: '#/index_commande'
            }]
        }
    },
    {
        path: 'edit_commande',
        component: resolve => require(['./components/pages/commandes/edit.vue'], resolve),
        meta: {
            title: 'edit commande ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'commande',
                href: '#',
            }, {
                text: 'edit commande',
                href: '#/edit_commande'
            }]
        }
    },
    {
        path: 'delete_commande',
        component: resolve => require(['./components/pages/commandes/delete.vue'], resolve),
        meta: {
            title: 'Delete commande',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'commande',
                href: '#',
            }, {
                text: 'Delete commande',
                href: '#/delete_commande'
            }]
        }
    },
    {
        path: 'index_detailcommande',
        component: resolve => require(['./components/pages/detailcommandes/index.vue'], resolve),
        meta: {
            title: 'Index detailcommande ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailcommande',
                href: '#',
            }, {
                text: 'Index detailcommande',
                href: '#/index_detailcommande'
            }]
        }
    },
    {
        path: 'edit_detailcommande',
        component: resolve => require(['./components/pages/detailcommandes/edit.vue'], resolve),
        meta: {
            title: 'edit detailcommande ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailcommande',
                href: '#',
            }, {
                text: 'edit detailcommande',
                href: '#/edit_detailcommande'
            }]
        }
    },
    {
        path: 'delete_detailcommande',
        component: resolve => require(['./components/pages/detailcommandes/delete.vue'], resolve),
        meta: {
            title: 'Delete detailcommande',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailcommande',
                href: '#',
            }, {
                text: 'Delete detailcommande',
                href: '#/delete_detailcommande'
            }]
        }
    },
    {
        path: 'add_detail',
        component: resolve => require(['./components/pages/detailcommandes/add_detail_commande.vue'], resolve),
        meta: {
            title: 'Add detailcommande',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailcommande',
                href: '#',
            }, {
                text: 'Add detailcommande',
                href: '#/add_detail'
            }]
        }
    },
    {
        path: 'add_detailapprovisionnement',
        component: resolve => require(['./components/pages/detailapprovisionnements/add.vue'], resolve),
        meta: {
            title: 'Add detailapprovisionnement',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailapprovisionnement',
                href: '#',
            }, {
                text: 'Add detailapprovisionnement',
                href: '#/add_detailapprovisionnement'
            }]
        }
    },
    {
        path: 'index_detailapprovisionnement',
        component: resolve => require(['./components/pages/detailapprovisionnements/index.vue'], resolve),
        meta: {
            title: 'Index detailapprovisionnement',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailapprovisionnement',
                href: '#',
            }, {
                text: 'Index detailapprovisionnement',
                href: '#/index_detailapprovisionnement'
            }]
        }
    },
    {
        path: 'edit_detailapprovisionnement',
        component: resolve => require(['./components/pages/detailapprovisionnements/edit.vue'], resolve),
        meta: {
            title: 'edit detailapprovisionnement ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailapprovisionnement',
                href: '#',
            }, {
                text: 'edit detailapprovisionnement',
                href: '#/edit_detailapprovisionnement'
            }]
        }
    },
    {
        path: 'delete_detailapprovisionnement',
        component: resolve => require(['./components/pages/detailapprovisionnements/delete.vue'], resolve),
        meta: {
            title: 'Delete detailapprovisionnement',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'detailapprovisionnement',
                href: '#',
            }, {
                text: 'Delete detailapprovisionnement',
                href: '#/delete_detailapprovisionnement'
            }]
        }
    },
    {
        path: 'add_facture_client',
        component: resolve => require(['./components/pages/facture_clients/add.vue'], resolve),
        meta: {
            title: 'Add Facture_Client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'fature_client',
                href: '#',
            }, {
                text: 'Add facture_client',
                href: '#/add_fature_client'
            }]
        }
    },
    {
        path: 'index_facture_client',
        component: resolve => require(['./components/pages/facture_clients/index.vue'], resolve),
        meta: {
            title: 'Index facture_client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_client',
                href: '#',
            }, {
                text: 'Index facture_client',
                href: '#/index_facture_client'
            }]
        }
    },
    {
        path: 'edit_facture_client',
        component: resolve => require(['./components/pages/facture_clients/edit.vue'], resolve),
        meta: {
            title: 'edit facture_client ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_client',
                href: '#',
            }, {
                text: 'edit facture_client',
                href: '#/edit_facture_client'
            }]
        }
    },
    {
        path: 'delete_facture_client',
        component: resolve => require(['./components/pages/facture_clients/delete.vue'], resolve),
        meta: {
            title: 'Delete facture_client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_client',
                href: '#',
            }, {
                text: 'Delete facture_client',
                href: '#/delete_facture_client'
            }]
        }
    },
    {
        path: 'add_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/add.vue'], resolve),
        meta: {
            title: 'Add Facture_Fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'fature_fournisseur',
                href: '#',
            }, {
                text: 'Add facture_fournisseur',
                href: '#/add_fature_fournisseur'
            }]
        }
    },
    {
        path: 'index_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/index.vue'], resolve),
        meta: {
            title: 'Index facture_fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'Index facture_fournisseur',
                href: '#/index_facture_fournisseur'
            }]
        }
    },
    {
        path: 'edit_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/edit.vue'], resolve),
        meta: {
            title: 'edit facture_fournisseur ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'edit facture_fournisseur',
                href: '#/edit_facture_fournisseur'
            }]
        }
    },
    {
        path: 'delete_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/delete.vue'], resolve),
        meta: {
            title: 'Delete facture_fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'Delete facture_fournisseur',
                href: '#/delete_facture_fournisseur'
            }]
        }
    },
    {
        path: 'add_regle_client',
        component: resolve => require(['./components/pages/regle_clients/add.vue'], resolve),
        meta: {
            title: 'Add regle_client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'regle_client',
                href: '#',
            }, {
                text: 'Add regle_client',
                href: '#/add_regle_client'
            }]
        }
    },
    {
        path: 'index_regle_client',
        component: resolve => require(['./components/pages/regle_clients/index.vue'], resolve),
        meta: {
            title: 'Index regle_client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'regle_client',
                href: '#',
            }, {
                text: 'Index regle_client',
                href: '#/index_regle_client'
            }]
        }
    },
    {
        path: 'edit_regle_client',
        component: resolve => require(['./components/pages/regle_clients/edit.vue'], resolve),
        meta: {
            title: 'edit regle_client ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'regle_client',
                href: '#',
            }, {
                text: 'edit regle_client',
                href: '#/edit_regle_client'
            }]
        }
    },
    {
        path: 'delete_regle_client',
        component: resolve => require(['./components/pages/regle_clients/delete.vue'], resolve),
        meta: {
            title: 'Delete regle_client',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'regle_client',
                href: '#',
            }, {
                text: 'Delete regle_client',
                href: '#/delete_regle_client'
            }]
        }
    },
    {
        path: 'add_regle_fournisseur',
        component: resolve => require(['./components/pages/regle_fournisseurs/add.vue'], resolve),
        meta: {
            title: 'Add regle_Fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'regle_fournisseur',
                href: '#',
            }, {
                text: 'Add regle_fournisseur',
                href: '#/add_regle_fournisseur'
            }]
        }
    },
    {
        path: 'index_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/index.vue'], resolve),
        meta: {
            title: 'Index facture_fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'Index facture_fournisseur',
                href: '#/index_facture_fournisseur'
            }]
        }
    },
    {
        path: 'edit_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/edit.vue'], resolve),
        meta: {
            title: 'edit facture_fournisseur ',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'edit facture_fournisseur',
                href: '#/edit_facture_fournisseur'
            }]
        }
    },
    {
        path: 'delete_facture_fournisseur',
        component: resolve => require(['./components/pages/facture_fournisseurs/delete.vue'], resolve),
        meta: {
            title: 'Delete facture_fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'Delete facture_fournisseur',
                href: '#/delete_facture_fournisseur'
            }]
        }
    },
    {
        path: 'check_invoice',
        component: resolve => require(['./components/pages/invoice_clients/check_invoice.vue'], resolve),
        meta: {
            title: 'Delete facture_fournisseur',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'facture_fournisseur',
                href: '#',
            }, {
                text: 'Delete facture_fournisseur',
                href: '#/delete_facture_fournisseur'
            }]
        }
    },
    {
        path: 'addnew_user',
        component: resolve => require(['./components/pages/addnew_user.vue'], resolve),
        meta: {
            title: 'Add New User',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Add New User',
                href: '#/addnew_user'
            }]
        }
    },{
        path: 'addnew_customer',
        component: resolve => require(['./components/pages/addnew_customer.vue'], resolve),
        meta: {
            title: 'Add New Customer',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Customers',
                href: '#',
            }, {
                text: 'Add New Customer',
                href: '#/addnew_customer'
            }]
        }
    },{
        path: 'reservations',
        component: resolve => require(['./components/pages/reservations.vue'], resolve),
        meta: {
            title: 'Reservation Infos',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Reservations',
                href: '#',
            }, {
                text: 'Reservation Infos',
                href: '#/reservations'
            }]
        }
    },{
        path: 'scheduling_change',
        component: resolve => require(['./components/pages/scheduling_change.vue'], resolve),
        meta: {
            title: 'Scheduling Change',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Scheduling_change',
                href: '#',
            }, {
                text: 'Scheduling_Change',
                href: '#/scheduling_change'
            }]
        }
    },{
        path: 'details_sched',
        component: resolve => require(['./components/pages/details_sched.vue'], resolve),
        meta: {
            title: 'Details_sched',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Details Scheduling',
                href: '#',
            }, {
                text: 'Details Scheduling',
                href: '#/details_sched'
            }]
        }
    },{
        path: 'reservation_ticket',
        component: resolve => require(['./components/pages/reservation_ticket.vue'], resolve),
        meta: {
            title: 'Reservation  and  tickets Infos',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Reservations and tickets',
                href: '#',
            }, {
                text: 'Reservation  and tickets Infos',
                href: '#/reservation_ticket'
            }]
        }
    },{
        path: 'addnew_contract',
        component: resolve => require(['./components/pages/addnew_contract.vue'], resolve),
        meta: {
            title: 'Add New Contract',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Contract',
                href: '#',
            }, {
                text: 'Add New Contract',
                href: '#/addnew_contract'
            }]
        }
    }
    ,{
        path: 'get_customer',
        component: resolve => require(['./components/pages/get_customer.vue'], resolve),
        meta: {
            title: 'Get Customer',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Customer',
                href: '#',
            }, {
                text: 'Get Customer',
                href: '#/get_customer'
            }]
        }
    },{
        path: 'get_contract',
        component: resolve => require(['./components/pages/get_contract.vue'], resolve),
        meta: {
            title: 'Get Contract',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Contract',
                href: '#',
            }, {
                text: 'Get Contract',
                href: '#/get_contract'
            }]
        }
    }
    ,{
        path: 'edit_contract',
        component: resolve => require(['./components/pages/edit_contract.vue'], resolve),
        meta: {
            title: 'edit Contract',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Contract',
                href: '#',
            }, {
                text: 'Edit Contract',
                href: '#/edit_contract'
            }]
        }
    },{
        path: 'booking',
        component: resolve => require(['./components/pages/booking.vue'], resolve),
        meta: {
            title: 'Booking',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Booking',
                href: '#',
            }, {
                text: 'Booking',
                href: '#/booking'
            }]
        }
    }
    ,{
        path: 'edit_customer',
        component: resolve => require(['./components/pages/edit_customer.vue'], resolve),
        meta: {
            title: 'edit Customer',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Customer',
                href: '#',
            }, {
                text: 'edit Customer',
                href: '#/edit_customer'
            }]
        }
    },{
        path: 'booking_details',
        component: resolve => require(['./components/pages/booking_details.vue'], resolve),
        meta: {
            title: 'Booking Details',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Booking',
                href: '#',
            }, {
                text: 'Booking Detail',
                href: '#/booking_details'
            }]
        }
    }
    , {
        path: 'edit_user',
        component: resolve => require(['./components/pages/edit_user.vue'], resolve),
        meta: {
            title: 'Edit User',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Edit User',
                href: '#/edit_user'
            }]
        }
    }, {
        path: 'user_profile',
        component: resolve => require(['./components/pages/user_profile.vue'], resolve),
        meta: {
            title: 'User Profile',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'User Profile',
                href: '#/user_profile'
            }]
        }
    }, {
        path: 'deleted_users',
        component: resolve => require(['./components/pages/deleted_users.vue'], resolve),
        meta: {
            title: 'Deleted Users',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Deleted Users',
                href: '#/deleted_users'
            }]
        }
    }, {
        path: 'blank',
        component: resolve => require(['./components/pages/blank.vue'], resolve),
        meta: {
            title: 'Blank',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Blank',
                href: '#/blank'
            }]
        }
    }, {
        path: 'invoice',
        component: resolve => require(['./components/pages/invoice.vue'], resolve),
        meta: {
            title: 'Invoice',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Invoice',
                href: '#/invoice'
            }]
        }
    }, {
        path: 'pricing',
        component: resolve => require(['./components/pages/pricing.vue'], resolve),
        meta: {
            title: 'Pricing',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Pricing Table',
                href: '#/pricing'
            }]
        }
    }, {
        path: 'boxed',
        component: resolve => require(['./components/pages/boxed.vue'], resolve),
        meta: {
            title: 'Boxed',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/boxed'
            }]
        }
    }, {
        path: 'fixed_menu',
        component: resolve => require(['./components/pages/fixed_menu.vue'], resolve),
        meta: {
            title: 'Fixed Menu',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/fixed_menu'
            }]
        }
    }, {
        path: 'movable_header',
        component: resolve => require(['./components/pages/movable_header.vue'], resolve),
        meta: {
            title: 'Movable Header',
            // breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/movable_header">Movable Header</a></li>`
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/movable_header'
            }]
        }
    }, {
        path: 'boxed_movableheader',
        component: resolve => require(['./components/pages/boxed_movableheader.vue'], resolve),
        meta: {
            title: 'Boxed & Movable Header',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/boxed_movableheader'
            }]
        }
    }, {
        path: 'menubar_fold',
        component: resolve => require(['./components/pages/menubar_fold.vue'], resolve),
        meta: {
            title: 'Menubar Fold',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/menubar_fold'
            }]
        }
    }, {
        path: 'mini_sidebar',
        component: resolve => require(['./components/pages/mini_sidebar.vue'], resolve),
        meta: {
            title: 'Mini Sidebar',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/mini_sidebar'
            }]
        }
    }]
}, {
    path: '/500',
    component: resolve => require(['./components/pages/500.vue'], resolve),
    meta: {
        title: '500',
        breadcrumb: ``
    }
}, {
    path: '/login',
    component: resolve => require(['./components/pages/login.vue'], resolve),
    meta: {
        title: 'Login',
        breadcrumb: ``
    }
},  {
    path: '/login3',
    component: resolve => require(['./components/pages/login3.vue'], resolve),
    meta: {
        title: 'Login3',
        breadcrumb: ``
    }
},
{
    path: '/register',
    component: resolve => require(['./components/pages/register.vue'], resolve),
    meta: {
        title: 'Register',
        breadcrumb: ``
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./components/pages/lockscreen.vue'], resolve),
    meta: {
        title: 'Lockscreen',
        breadcrumb: ``
    }
}, {
    path: '/forgot_password',
    component: resolve => require(['./components/pages/forgot_password.vue'], resolve),
    meta: {
        title: 'Forgot Password',
        breadcrumb: ``
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./components/pages/reset_pass.vue'], resolve),
    meta: {
        title: 'Reset Password',
        breadcrumb: ``
    }
}, {
    path: '*',
    component: resolve => require(['./components/pages/404.vue'], resolve),
    meta: {
        title: '404',
        breadcrumb: ``
    }
}]

export default routes
