 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar -->
        <section class="sidebar">
            <div id="menu1" role="navigation">
                <div class="nav_profile">
                    <profile></profile>
                </div>
                <vmenu>
                    <vmenu-item link="/" icon="ti-desktop">
                       
                    </vmenu-item>
                    <vmenu-item link="/index2" icon="ti-layout">
                        
                    </vmenu-item>
                    <vsub-menu title="Forms" icon="ti-check-box">
                        <vmenu>
                        <vsub-menu title="Features" icon="ti-receipt">
                            <vmenu-item link="/form-elements" icon="ti-cup">
                              
                            </vmenu-item>
                            <vmenu-item link="/realtime_form" icon="ti-write">
                               
                            </vmenu-item>
                            <vmenu-item link="/form-validations" icon="ti-alert">
                               
                            </vmenu-item>
                            <vmenu-item link="/form_layouts" icon="ti-layout-width-default">
                                
                            </vmenu-item>
                            <vmenu-item link="/complex_forms" icon="ti-layout-cta-left">
                                
                            </vmenu-item>
                            <vmenu-item link="/radio_check" icon="ti-check-box">
                              
                            </vmenu-item>
                        </vsub-menu>
                        <vsub-menu title="Components" icon="ti-clipboard">
                            <vmenu-item link="/form_editors" icon="ti-pencil">
                               
                            </vmenu-item>
                            <vmenu-item link="/form_wizards" icon="ti-settings">
                               
                            </vmenu-item>
                            <vmenu-item link="/dropdowns" icon="ti-widget-alt">
                               
                            </vmenu-item>
                            <vmenu-item link="/vue_multiselect" icon="ti-widget-alt">
                              
                            </vmenu-item>
                            <vmenu-item link="/vue_slider" icon="ti-bell">
                               
                            </vmenu-item>
                            <vmenu-item link="/date_pickers" icon="ti-calendar">
                              
                            </vmenu-item>
                            <vmenu-item link="/advanced_date_pickers" icon="ti-notepad">
                                
                            </vmenu-item>
                        </vsub-menu>
                    </vmenu>
                    </vsub-menu>
                    <vsub-menu title="UI Features" icon="ti-desktop">
                        <vmenu>
                        <vmenu-item link="/general_components" icon="ti-plug">
                           
                        </vmenu-item>
                        <vmenu-item link="/buttons" icon="ti-layout-placeholder">
                          
                        </vmenu-item>
                        <vmenu-item link="/tabs_accordions" icon="ti-layers">
                            
                        </vmenu-item>
                        <vmenu-item link="/font_icons" icon="ti-ink-pen">
                           
                        </vmenu-item>
                        <vmenu-item link="/advanced_modals" icon="ti-brush-alt">
                          
                        </vmenu-item>
                        <vmenu-item link="/timeline" icon="ti-time">
                           
                        </vmenu-item>
                        </vmenu>
                    </vsub-menu>
                    <vsub-menu title="UI Components" icon="ti-briefcase">
                        <vmenu-item link="/pickers" icon="ti-brush">
                           
                        </vmenu-item>
                        <vmenu-item link="/color_pickers" icon="ti-paint-bucket">
                          
                        </vmenu-item>
                        <vmenu-item link="/grid_layout" icon="ti-layout-grid2">
                           
                        </vmenu-item>
                        <vmenu-item link="/tags_input" icon="ti-tag">
                           
                        </vmenu-item>
                        <vmenu-item link="/nestable_list" icon="ti-view-list">
                           
                        </vmenu-item>
                        <vmenu-item link="/sweet_alert" icon="ti-bell">
                           
                        </vmenu-item>
                        <vmenu-item link="/toastr_notifications" icon="ti-tablet">
                            
                        </vmenu-item>
                        <vmenu-item link="/draggable_portlets" icon="ti-control-shuffle">
                           
                        </vmenu-item>
                        <vmenu-item link="/jstree" icon="ti-control-shuffle">
                            
                        </vmenu-item>
                        <vmenu-item link="/transitions" icon="ti-star">
                            
                        </vmenu-item>
                    </vsub-menu>
                    <vmenu-item link="/widgets" icon="ti-widgetized">
                        
                    </vmenu-item>
                    <vsub-menu title="DataTables" icon="ti-layout-grid4">
                        <vmenu-item link="/simple_tables" icon="ti-layout">
                          
                        </vmenu-item>
                        <vmenu-item link="/advanced-tables" icon="ti-server">
                           
                        </vmenu-item>
                        <vmenu-item link="/bootstrap_tables" icon="ti-layout-grid2">
                           
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Charts" icon="ti-bar-chart">
                        <vmenu-item link="/flot_charts" icon="ti-bar-chart-alt">
                            
                        </vmenu-item>
                        <vmenu-item link="/nvd3_charts" icon="ti-stats-up">
                           
                        </vmenu-item>
                        <vmenu-item link="/circle_sliders" icon="ti-basketball">
                            
                        </vmenu-item>
                        <vmenu-item link="/chartist" icon="ti-bar-chart">
                            
                        </vmenu-item>
                        <vmenu-item link="/frappe_charts" icon="ti-bar-chart">
                           
                        </vmenu-item>
                    </vsub-menu>
                    <vmenu-item link="/calendar" icon="ti-video-clapper">
                       <h5 class="badge badge-success float-right mt-1 badge1">7</h5>
                    </vmenu-item>
                    <vsub-menu title="Gallery" icon="ti-gallery">
                        <vmenu-item link="/masonry_gallery" icon="ti-gallery">
                           
                        </vmenu-item>
                        <vmenu-item link="/dropify" icon="ti-dropbox">
                           
                        </vmenu-item>
                        <vmenu-item link="/image_hover" icon="ti-image">
                           
                        </vmenu-item>
                        <vmenu-item link="/image_filter" icon="ti-filter">
                           
                        </vmenu-item>
                        <vmenu-item link="/image_magnifier" icon="ti-zoom-in">
                            
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Users" icon="ti-user">
                        <vmenu-item link="/users_list" icon="ti-menu-alt">
                          
                        </vmenu-item>
                        <vmenu-item link="/addnew_user" icon="ti-user">
                           
                        </vmenu-item>
                        <vmenu-item link="/user_profile" icon="ti-id-badge">
                           
                        </vmenu-item>
                        <vmenu-item link="/deleted_users" icon="ti-trash">
                           
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Customers" icon="ti-user" >
                        <vmenu-item link="/addnew_customer" @click="toggle_left"  icon="ti-user">
                            
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Maps" icon="ti-location-pin">
                        <vmenu-item link="/gmaps" icon="ti-world">
                           
                        </vmenu-item>
                        <vmenu-item link="/vector_maps" icon="ti-map">
                          
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Pages" icon="ti-files">
                        <vmenu-item link="/login" icon="ti-shift-right">
                            
                        </vmenu-item>
                        <vmenu-item link="/register" icon="ti-check-box">
                           
                        </vmenu-item>
                        <vmenu-item link="/forgot_password" icon="ti-help">
                           
                        </vmenu-item>
                        <vmenu-item link="/lockscreen" icon="ti-lock">
                           
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Extra Pages" icon="ti-face-smile">
                        <vmenu-item link="/blank" icon="ti-file">
                           
                        </vmenu-item>
                        <vmenu-item link="/invoice" icon="ti-layout-cta-left">
                           
                        </vmenu-item>
                        <vmenu-item link="/pricing" icon="ti-time">
                           
                        </vmenu-item>
                        <vmenu-item link="/404" icon="ti-unlink">
                           
                        </vmenu-item>
                        <vmenu-item link="/500" icon="ti-face-sad">
                           
                        </vmenu-item>
                    </vsub-menu>
                </vmenu>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
import {
    vmenu,
    vmenuItem,
    vsubMenu
} from './menu';
import profile from "../left-profile/user_profile.vue"
export default {
    name: "left-side",
    components: {
        vmenu,
        vsubMenu,
        vmenuItem,
        profile
    },
    data() {
        return {
        }
    },
    methods: {
        //Enable sidebar toggle
        toggle_left() {
            this.$store.commit('left_menu1', "toggle");
        }
    }
}
</script>
