import { Component, ViewContainerRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calcula Frete';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    vcr: ViewContainerRef
  ) {
    // Icones Forms
    iconRegistry.addSvgIcon('form-close', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_close_black_24px.svg'));
    iconRegistry.addSvgIcon('form-edit', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_edit.svg'));
    iconRegistry.addSvgIcon('form-trash', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_trash.svg'));
    iconRegistry.addSvgIcon('form-plus', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_plus_red_24px.svg'));

    iconRegistry.addSvgIcon('header-menu', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_menu_white_24px.svg'));
    iconRegistry.addSvgIcon('header-notification', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_notifications_red_24px.svg'));
    iconRegistry.addSvgIcon('header-message', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_message_red_24px.svg'));
    iconRegistry.addSvgIcon('header-date', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_date_range_red_24px.svg'));
    iconRegistry.addSvgIcon('header-viewlist', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_view_list_red_24px.svg'));
    iconRegistry.addSvgIcon('header-people', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_people_red_24px.svg'));
    iconRegistry.addSvgIcon('header-close', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_close_red_24px.svg'));

    // Icones Menu
    iconRegistry.addSvgIcon('menu-dashboard', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_dashboard_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-favorite', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_star_border_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-description', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_description_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-factory', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_factory_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-money', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_monetization_on_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-computer', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_computer_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-paste', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_content_paste_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-domain', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_domain_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-work', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_work_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-theme', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_format_color_fill_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-swap', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_swap_horiz_grey_24px.svg'));
    iconRegistry.addSvgIcon('menu-settings', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_settings_grey_24px.svg'));

    // Icones SlideNav

    iconRegistry.addSvgIcon('slidenav-close', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_arrow_back_white_24px.svg'));
    iconRegistry.addSvgIcon('slidenav-settings', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_settings_white_24px.svg'));
    iconRegistry.addSvgIcon('slidenav-search', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_search_grey_24px.svg'));
    iconRegistry.addSvgIcon('slidenav-pin', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_open_menu_white_24px.svg'));

    // Icones Login
    iconRegistry.addSvgIcon('login-lock', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_lock_outline_red_24px.svg'));
    // Icones Erro
    iconRegistry.addSvgIcon('erro-warning', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_warning_grey_24px.svg'));
    // Icones Dropdown


    iconRegistry.addSvgIcon('drop-foward-arrow', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_arrow_forward_grey_24px.svg'));
    iconRegistry.addSvgIcon('drop-alert-error', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_error_outline_red_24px.svg'));
    iconRegistry.addSvgIcon('drop-alert-error-venc', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_error_red_24px.svg'));


    iconRegistry.addSvgIcon('drop-foward-arrow', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_arrow_forward_grey_24px.svg'));
    iconRegistry.addSvgIcon('drop-alert-error', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_info_outline_red_18px.svg'));
    iconRegistry.addSvgIcon('drop-alert-error2', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_info_outline_orange_18px.svg'));
    iconRegistry.addSvgIcon('drop-alert-error1', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_info_outline_yellow_18px.svg'));
    iconRegistry.addSvgIcon('drop-alert-check', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_check_green_18px.svg'));

    // Icones Mensagem
    iconRegistry.addSvgIcon('online', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic-message-online.svg'));
    iconRegistry.addSvgIcon('offline', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic-message-offline.svg'));
    iconRegistry.addSvgIcon('msg', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_chat_grey_24px.svg'));
    iconRegistry.addSvgIcon('msg-send', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_send_white_24px.svg'));
    iconRegistry.addSvgIcon('msg-person', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_person_grey_24px.svg'));
    iconRegistry.addSvgIcon('msg-alert', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_alert_red_24px.svg'));

    // Icones mega-menu
    iconRegistry.addSvgIcon('mm-arrow', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_keyboard_arrow_right_grey_18px.svg'));

    // Icones Mensageria
    iconRegistry.addSvgIcon('menssaging-alarm', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_alarm_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-done', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_done_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-help', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_help_outline_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-bubble', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_chat_bubble_outline_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-notification', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_notifications_none_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-error', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_highlight_off_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-info', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_info_outline_white_36px.svg'));
    iconRegistry.addSvgIcon('menssaging-star', sanitizer.bypassSecurityTrustResourceUrl('../assets/icon/ic_star_border_white_36px.svg'));
  }

  
  ngOnInit() {    
  }

}



