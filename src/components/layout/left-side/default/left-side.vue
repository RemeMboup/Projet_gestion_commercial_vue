 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar -->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <profile></profile>
                </div>
                <vmenu>
                    <vmenu-item link="/login3" icon="ti-desktop">
                        &nbsp; Login
                    </vmenu-item>
                    <vmenu-item link="/index" icon="ti-desktop">
                        &nbsp; Dashboard 1
                    </vmenu-item>
                    <vmenu-item link="/index2" icon="ti-layout">
                        &nbsp; Dashboard 2
                    </vmenu-item>
                    <vsub-menu title="Forms" icon="ti-check-box">
                        <vmenu>
                        <vsub-menu title="Features" icon="ti-receipt">
                            <vmenu-item link="/form-elements" icon="ti-cup">
                                Form Elements
                            </vmenu-item>
                            <vmenu-item link="/realtime_form" icon="ti-write">
                                Realtime Form
                            </vmenu-item>
                            <vmenu-item link="/form-validations" icon="ti-alert">
                                Form Validations
                            </vmenu-item>
                            <vmenu-item link="/form_layouts" icon="ti-layout-width-default">
                                Form Layouts
                            </vmenu-item>
                            <vmenu-item link="/complex_forms" icon="ti-layout-cta-left">
                                Complex Forms
                            </vmenu-item>
                            <vmenu-item link="/radio_check" icon="ti-check-box">
                                Radio and Checkbox
                            </vmenu-item>
                        </vsub-menu>
                        <vsub-menu title="Components" icon="ti-clipboard">
                            <vmenu-item link="/form_editors" icon="ti-pencil">
                                Form Editors
                            </vmenu-item>
                            <vmenu-item link="/form_wizards" icon="ti-settings">
                                Form Wizards
                            </vmenu-item>
                            <vmenu-item link="/dropdowns" icon="ti-widget-alt">
                                Drop Downs
                            </vmenu-item>
                            <vmenu-item link="/vue_multiselect" icon="ti-widget-alt">
                                Vue Multiselect
                            </vmenu-item>
                            <vmenu-item link="/vue_slider" icon="ti-bell">
                                Vue Slider
                            </vmenu-item>
                            <vmenu-item link="/date_pickers" icon="ti-calendar">
                                Date pickers
                            </vmenu-item>
                            <vmenu-item link="/advanced_date_pickers" icon="ti-notepad">
                                Advanced Date pickers
                            </vmenu-item>
                        </vsub-menu>
                    </vmenu>
                    </vsub-menu>
                    <vsub-menu title="UI Features" icon="ti-desktop">
                        <vmenu>
                        <vmenu-item link="/general_components" icon="ti-plug">
                            General Components
                        </vmenu-item>
                        <vmenu-item link="/buttons" icon="ti-layout-placeholder">
                            Buttons
                        </vmenu-item>
                        <vmenu-item link="/tabs_accordions" icon="ti-layers">
                            Tabs &amp; Accordions
                        </vmenu-item>
                        <vmenu-item link="/font_icons" icon="ti-ink-pen">
                            Font Icons
                        </vmenu-item>
                        <vmenu-item link="/advanced_modals" icon="ti-brush-alt">
                            Advanced Modals
                        </vmenu-item>
                        <vmenu-item link="/timeline" icon="ti-time">
                            Timeline
                        </vmenu-item>
                        </vmenu>
                    </vsub-menu>
                    <vsub-menu title="UI Components" icon="ti-briefcase">
                        <vmenu-item link="/pickers" icon="ti-brush">
                            Pickers
                        </vmenu-item>
                        <vmenu-item link="/color_pickers" icon="ti-paint-bucket">
                           Color Pickers
                        </vmenu-item>
                        <vmenu-item link="/grid_layout" icon="ti-layout-grid2">
                            Grid Layout
                        </vmenu-item>
                        <vmenu-item link="/tags_input" icon="ti-tag">
                            Tags Input
                        </vmenu-item>
                        <vmenu-item link="/nestable_list" icon="ti-view-list">
                            Nestable List
                        </vmenu-item>
                        <vmenu-item link="/sweet_alert" icon="ti-bell">
                            Sweet Alert
                        </vmenu-item>
                        <vmenu-item link="/toastr_notifications" icon="ti-tablet">
                            Toastr Notifications
                        </vmenu-item>
                        <vmenu-item link="/draggable_portlets" icon="ti-control-shuffle">
                            Draggable Portlets
                        </vmenu-item>
                        <vmenu-item link="/jstree" icon="ti-control-shuffle">
                            Jstree
                        </vmenu-item>
                        <vmenu-item link="/transitions" icon="ti-star">
                            Transitions
                        </vmenu-item>
                    </vsub-menu>
                    <vmenu-item link="/widgets" icon="ti-widgetized">
                         &nbsp; Widgets
                    </vmenu-item>
                    <vsub-menu title="DataTables" icon="ti-layout-grid4">
                        <vmenu-item link="/simple_tables" icon="ti-layout">
                            Simple tables
                        </vmenu-item>
                        <vmenu-item link="/advanced-tables" icon="ti-server">
                            Advanced Tables
                        </vmenu-item>
                        <vmenu-item link="/bootstrap_tables" icon="ti-layout-grid2">
                            Bootstrap Tables
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Charts" icon="ti-bar-chart">
                        <vmenu-item link="/flot_charts" icon="ti-bar-chart-alt">
                            Flot Charts
                        </vmenu-item>
                        <vmenu-item link="/nvd3_charts" icon="ti-stats-up">
                            NVD3 Charts
                        </vmenu-item>
                        <vmenu-item link="/circle_sliders" icon="ti-basketball">
                            Circle Sliders
                        </vmenu-item>
                        <vmenu-item link="/chartist" icon="ti-bar-chart">
                            Chartist Charts
                        </vmenu-item>
                        <vmenu-item link="/frappe_charts" icon="ti-bar-chart">
                            Frappe Charts
                        </vmenu-item>
                    </vsub-menu>
                    <vmenu-item link="/calendar" icon="ti-video-clapper">
                        &nbsp; Calendar<h5 class="badge badge-success float-right mt-1 badge1">7</h5>
                    </vmenu-item>
                    <vsub-menu title="Gallery" icon="ti-gallery">
                        <vmenu-item link="/masonry_gallery" icon="ti-gallery">
                            Masonry Gallery
                        </vmenu-item>
                        <vmenu-item link="/dropify" icon="ti-dropbox">
                            Dropify
                        </vmenu-item>
                        <vmenu-item link="/image_hover" icon="ti-image">
                            Image Hover
                        </vmenu-item>
                        <vmenu-item link="/image_filter" icon="ti-filter">
                            Image Filter
                        </vmenu-item>
                        <vmenu-item link="/image_magnifier" icon="ti-zoom-in">
                            Image Magnifier
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Users" icon="ti-user">
                        <vmenu-item link="/index" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add" icon="ti-user">
                            Add New User
                        </vmenu-item>
                        <vmenu-item link="/edit" icon="ti-id-badge">
                            Edit User
                        </vmenu-item>
                        <vmenu-item link="/delete" icon="ti-trash">
                            Deleted Users
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Categories" icon="ti-user">
                         <vmenu-item link="/index_categorie" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_categorie" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_categorie" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_categorie" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Produits" icon="ti-user">
                         <vmenu-item link="/index_produit" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_produit" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_produit" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_produit" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Clients" icon="ti-user">
                         <vmenu-item link="/index_client" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_client" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_client" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_client" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Fournisseurs" icon="ti-user">
                         <vmenu-item link="/index_fournisseur" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_fournisseur" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_fournisseur" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_fournisseur" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Approvisionnements" icon="ti-user">
                         <vmenu-item link="/index_approvisionnement" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_approvisionnement" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_approvisionnement" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_approvisionnement" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Commandes" icon="ti-user">
                         <vmenu-item link="/index_commande" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_commande" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_commande" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_commande" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="DetailCommandes" icon="ti-user">
                         <vmenu-item link="/index_detailcommande" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_detail" icon="ti-user">
                            AddDetailcommande
                        </vmenu-item>
                       <vmenu-item link="/edit_detailcommande" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_detailcommande" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="DetailApprovisionnements" icon="ti-user">
                         <vmenu-item link="/index_detailapprovisionnement" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_detailapprovisionnement" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_detailapprovisionnement" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_detailapprovisionnement" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    <vsub-menu title="Facture_Clients" icon="ti-user">
                         <vmenu-item link="/index_facture_client" icon="ti-menu-alt">
                            Index
                        </vmenu-item>
                        <vmenu-item link="/add_facture_client" icon="ti-user">
                            Add
                        </vmenu-item>
                       <vmenu-item link="/edit_facture_client" icon="ti-id-badge">
                            Edit
                        </vmenu-item>
                       <vmenu-item link="/delete_facture_client" icon="ti-trash">
                            Delete
                        </vmenu-item>
                        
                    </vsub-menu>
                    
                    <vsub-menu title="Maps" icon="ti-location-pin">
                        <vmenu-item link="/gmaps" icon="ti-world">
                            Google Maps
                        </vmenu-item>
                        <vmenu-item link="/vector_maps" icon="ti-map">
                            Vector Maps
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Pages" icon="ti-files">
                        <vmenu-item link="/login" icon="ti-shift-right">
                            Login
                        </vmenu-item>
                        <vmenu-item link="/register" icon="ti-check-box">
                            Register
                        </vmenu-item>
                        <vmenu-item link="/forgot_password" icon="ti-help">
                            Forgot Password
                        </vmenu-item>
                        <vmenu-item link="/lockscreen" icon="ti-lock">
                            Lockscreen
                        </vmenu-item>
                    </vsub-menu>
                    <vsub-menu title="Extra Pages" icon="ti-face-smile">
                        <vmenu-item link="/blank" icon="ti-file">
                            Blank page
                        </vmenu-item>
                        <vmenu-item link="/invoice" icon="ti-layout-cta-left">
                            Invoice
                        </vmenu-item>
                        <vmenu-item link="/pricing" icon="ti-time">
                            Pricing Table
                        </vmenu-item>
                        <vmenu-item link="/404" icon="ti-unlink">
                            404 Error
                        </vmenu-item>
                        <vmenu-item link="/500" icon="ti-face-sad">
                            500 Error
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
    }
}
</script>
