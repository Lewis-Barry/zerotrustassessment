﻿<#
.SYNOPSIS
   Helper method to connect to Microsoft Graph using Connect-MgGraph with the required scopes.

.DESCRIPTION
   Use this cmdlet to connect to Microsoft Graph using Connect-MgGraph.

   This command is completely optional if you are already connected to Microsoft Graph and other services using Connect-MgGraph with the required scopes.

   ```
   Connect-MgGraph -Scopes (Get-ZtGraphScope)
   ```

.EXAMPLE
   Connect-ZtAssessment

   Connects to Microsoft Graph using Connect-MgGraph with the required scopes.


.EXAMPLE
   Connect-ZtAssessment -UseDeviceCode

   Connects to Microsoft Graph and Azure using the device code flow. This will open a browser window to prompt for authentication.

#>

function Connect-ZtAssessment
{
    [CmdletBinding()]
    param(
        # If specified, the cmdlet will use the device code flow to authenticate to Graph and Azure.
        # This will open a browser window to prompt for authentication and is useful for non-interactive sessions and on Windows when SSO is not desired.
        [switch] $UseDeviceCode,

        # The environment to connect to. Default is Global.
        [ValidateSet('China', 'Germany', 'Global', 'USGov', 'USGovDoD')]
        [string]$Environment = 'Global'
    )


    Write-Verbose 'Connecting to Microsoft Graph'
    try
    {
        Connect-MgGraph -Scopes (Get-ZtGraphScope) -NoWelcome -UseDeviceCode:$UseDeviceCode -Environment $Environment
    }
    catch [Management.Automation.CommandNotFoundException]
    {
        Write-Host "`nThe Graph PowerShell module is not installed. Please install the module using the following command. For more information see https://learn.microsoft.com/powershell/microsoftgraph/installation" -ForegroundColor Red
        Write-Host "`Install-Module Microsoft.Graph -Scope CurrentUser`n" -ForegroundColor Yellow
    }
}
