module.exports = {
  api: '/api/v1',
  LoginFormStyels: {
    checkboxStyles: {
      position: 'absolute',
      top: '-20%',
      left: '-20%',
      display: 'block',
      width: '140%',
      height: '140%',
      margin: '0px',
      padding: '0px',
      border: '0px',
      opacity: 0,
      background: 'rgb(255, 255, 255)'
    },
    iCheckStyle: {
      position: 'relative'
    },
    iCheckHelperStyle: {
      position: 'absolute',
      top: '-20%',
      left: '-20%',
      display: 'block',
      width: '140%',
      height: '140%',
      margin: '0px',
      padding: '0px',
      border: '0px',
      opacity: 0,
      background: 'rgb(255, 255, 255)'
    }
  },
  AdminLTE: {
    theme: 'skin-blue sidebar-mini',
    loginTheme: 'login-page',
    navbarMenuSlimscroll: true,
    navbarMenuSlimscrollWidth: '3px',
    navbarMenuHeight: '200px',
    animationSpeed: 500,
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: true,
    screenSizes: {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1200
    }
  }
}