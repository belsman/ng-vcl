"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var input_module_1 = require('./components/input/input.module');
var core_1 = require('@angular/core');
var icon_module_1 = require('./components/icon/icon.module');
var metalist_module_1 = require('./components/metalist/metalist.module');
var dropdown_module_1 = require('./components/dropdown/dropdown.module');
var select_module_1 = require('./components/select/select.module');
var icogram_module_1 = require('./components/icogram/icogram.module');
var button_module_1 = require('./components/button/button.module');
var button_group_module_1 = require('./components/button-group/button-group.module');
var layer_module_1 = require('./components/layer/layer.module');
var tab_module_1 = require('./components/tab/tab.module');
var navigation_module_1 = require('./components/navigation/navigation.module');
var toolbar_module_1 = require('./components/toolbar/toolbar.module');
var tether_module_1 = require('./components/tether/tether.module');
var link_module_1 = require('./components/link/link.module');
var popover_module_1 = require('./components/popover/popover.module');
var radio_button_module_1 = require('./components/radio-button/radio-button.module');
var checkbox_module_1 = require('./components/checkbox/checkbox.module');
var off_click_module_1 = require('./directives/off-click/off-click.module');
var form_control_label_module_1 = require('./components/form-control-label/form-control-label.module');
var wormhole_module_1 = require('./directives/wormhole/wormhole.module');
var month_picker_module_1 = require('./components/month-picker/month-picker.module');
__export(require('./reflect'));
__export(require('./components/icon/icon.module'));
__export(require('./components/icogram/icogram.module'));
__export(require('./components/button/button.module'));
__export(require('./components/button-group/button-group.module'));
__export(require('./components/layer/layer.module'));
__export(require('./components/tab/tab.module'));
__export(require('./components/navigation/navigation.module'));
__export(require('./components/toolbar/toolbar.module'));
__export(require('./components/tether/tether.module'));
__export(require('./components/link/link.module'));
__export(require('./components/popover/popover.module'));
__export(require('./components/radio-button/radio-button.module'));
__export(require('./components/checkbox/checkbox.module'));
__export(require('./components/month-picker/month-picker.module'));
__export(require('./directives/off-click/off-click.module'));
__export(require('./directives/wormhole/wormhole.module'));
__export(require('./l10n/l10n.module'));
var overlayManager_service_1 = require('./services/overlayManager.service');
var VCLModule = (function () {
    function VCLModule() {
    }
    VCLModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        wormhole_module_1.VCLWormholeModule,
                        icon_module_1.VCLIconModule,
                        icogram_module_1.VCLIcogramModule,
                        button_module_1.VCLButtonModule,
                        button_group_module_1.VCLButtonGroupModule,
                        layer_module_1.VCLLayerModule,
                        tether_module_1.VCLTetherModule,
                        link_module_1.VCLLinkModule,
                        input_module_1.VCLInputModule,
                        tab_module_1.VCLTabNavModule,
                        navigation_module_1.VCLNavigationModule,
                        toolbar_module_1.VCLToolbarModule,
                        popover_module_1.VCLPopoverModule,
                        radio_button_module_1.VCLRadioButtonModule,
                        checkbox_module_1.VCLCheckboxModule,
                        form_control_label_module_1.VCLFormControlLabelModule,
                        metalist_module_1.VCLMetalistModule,
                        dropdown_module_1.VCLDropdownModule,
                        select_module_1.VCLSelectModule,
                        off_click_module_1.VCLOffClickModule,
                        month_picker_module_1.VCLMonthPickerModule
                    ],
                    exports: [
                        wormhole_module_1.VCLWormholeModule,
                        icon_module_1.VCLIconModule,
                        icogram_module_1.VCLIcogramModule,
                        button_module_1.VCLButtonModule,
                        button_group_module_1.VCLButtonGroupModule,
                        layer_module_1.VCLLayerModule,
                        tether_module_1.VCLTetherModule,
                        link_module_1.VCLLinkModule,
                        input_module_1.VCLInputModule,
                        tab_module_1.VCLTabNavModule,
                        navigation_module_1.VCLNavigationModule,
                        toolbar_module_1.VCLToolbarModule,
                        popover_module_1.VCLPopoverModule,
                        radio_button_module_1.VCLRadioButtonModule,
                        checkbox_module_1.VCLCheckboxModule,
                        form_control_label_module_1.VCLFormControlLabelModule,
                        metalist_module_1.VCLMetalistModule,
                        dropdown_module_1.VCLDropdownModule,
                        select_module_1.VCLSelectModule,
                        off_click_module_1.VCLOffClickModule,
                        month_picker_module_1.VCLMonthPickerModule
                    ],
                    providers: [
                        overlayManager_service_1.OverlayManagerService
                    ],
                },] },
    ];
    /** @nocollapse */
    VCLModule.ctorParameters = [];
    return VCLModule;
}());
exports.VCLModule = VCLModule;