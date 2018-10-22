import {
  injectGlobal
} from 'styled-components';

injectGlobal `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1540191975927'); /* IE9*/
  src: url('./iconfont.eot?t=1540191975927#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWUAAsAAAAAB/QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8qkj6Y21hcAAAAYAAAABdAAABnLSzHn5nbHlmAAAB4AAAAa8AAAG4enH35mhlYWQAAAOQAAAALwAAADYTE3PEaGhlYQAAA8AAAAAgAAAAJAfsA3hobXR4AAAD4AAAAA4AAAAQEAAAAGxvY2EAAAPwAAAACgAAAAoBIACObWF4cAAAA/wAAAAeAAAAIAESADxuYW1lAAAEHAAAAUUAAAJtPlT+fXBvc3QAAAVkAAAALgAAAD8iX2KXeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByemTznYG7438AQw9zA0AAUZgTJAQDiFQwgeJztkEEOgDAIBAdbDTE+xWPTB3ny5e0zKlAPPsIlQ2BDOCywAsk4jQxyI7gucyX8xB5+ptquVgu00mrXMb5TSOJCY1r8s2z8OqKXd0ue2sQzbnXiuXadkB6FLxL2AAAAeJxFzj1s00AYxvH3vfP53DRxnCaxaeVEdu2cU0AkddJzhUTaIipVqthQ1aUgIeF+EBgchkQsiJWNAQYGxk7dUQdaBoYuRapA6sYAEswsTFyJWFie6a9HP6AAF+/oPl2BaRAQATC7YmI03yJ6GAkrkZ5jW0V0bIcKj+uWY3uJtKJ5+tYwS4ZGjobqx6MsG+LicDBgh5R86auf/e3tPl7qp6lrjM80So82pnZGmIyybKRORuwQCfmUpv9LAG3suKDHYw6HIoTQAvCDyOcBdspURIHOKZOduIbBQqAHs2Khu4TdYJY7JlYrdieWN5Acp2vqfPUBFu/fesh0wvgenrd7g0X0V64le3eXr7fuNWveTKN9dkZBzeGSJYKy+sDcJx9bsj23YebXG5vMna66caMOAGRs+qYVaBOuwFWAREKiAfe7IvJ7mMgwkYL3MBJ69d9yKSITeVdwfcp5msfXv9R31Sziy0JJvSerl9+gtpV3J++cmrlCPovXTicpqT/fJ0b5t1E5mcFXN1/8+exhidDbIV1/5uZIeLA8QZDtNmuxTmqk/JjTeu5AfZ2Av0ZNYYMAeJxjYGRgYABijjs+/PH8Nl8ZuFkYQOD65+nPEfT/HSy8zI5ALgcDE0gUADrxC5YAeJxjYGRgYG7438AQw8LAwPD/MwsvA1AEBbAAAHHaBGx4nGNhYGBgQcIAALAAEQAAAAAAAABEAI4A3AAAeJxjYGRgYGBhMABiEGACYi4gZGD4D+YzAAANwgFPAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBrTi/tLg0n8kxkb2yNDcxPymTgQEAS2sGeAAA') format('woff'),
  url('./iconfont.ttf?t=1540191975927') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1540191975927#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`