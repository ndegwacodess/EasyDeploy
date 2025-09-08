/**
 * Dashboard should be the landing page with widgets showing critical metrics
 * Deployments is your core feature - make this prominent and intuitive
 * Security consolidates all your security features in one logical place
 * Monitoring separates ongoing observation from active deployment
 * Global Search - Add a search bar that can find deployments, logs, settings across the platform
 * Quick Actions - Floating action button for "Deploy New App" since it's likely a primary user action
*/
import React from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiParrotsecurity } from "react-icons/si";
import { SiCampaignmonitor } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { GiPlagueDoctorProfile } from "react-icons/gi";


export default function MainNavbar() {
  const Navbar = [
    /**
     * Dashboard
     *  Overview - Real-time server metrics, active deployments, system health
     *  Analytics - Network flows, resource usage graphs, performance trends
     *  Alerts - Active warnings, error logs, system notifications
     * 
    */
    {index: 1, name: "Dashboard", icon: <MdOutlineDashboardCustomize/>,path: "", hasDropDown: false},
    
    /**
     * The drop down bar for deployments will include 
     
     * Active Projects List of active running application with status
     * Deploy new Visual deploymen interface 
     * Templates Pre Configured deployment Templates
     * Terminal Direct Cli acccess for advanced users
     * Build Logs Real time Deloymnet and Build logs 
     * 
    */ 
    {index: 2, name: "Deployments", icon: <AiOutlineDeploymentUnit/>, path: "", hasDropDown: false },
    
    /**
     * The drop down bar for Security will include:
     
     * Certificate SSL/TLS management, auto-renewal status
     * Firewall Rules Configuration, Port Management
     * Access Control - User Permisssion, API Keys authentictaion
     * Scans and Threats Vulnerability assesment IDP/IPS alert from suricata
     * Compliance Security Policies audit Logs
     * */ 
    {index: 3, name: "Security", icon: <SiParrotsecurity/>, path: "", hasDropDown: false},
    /**
     * The drop down bar for Monitoring will include:
     
     *  System Health - CPU, RAM, disk, network metrics
     *  Application Metrics - Per-app performance, uptime
     *  Network Traffic - Real-time flows, bandwidth usage
     *  OpenTelemetry - Distributed tracing, custom metrics
     *  Logs - Centralized logging via FluentBit
     * 
     */ 
    {index: 4, name: "Monitoring", icon: <SiCampaignmonitor/>, path: "", hasDropDown: false},
    /**
     * The drop down bar for Monitoring will include:
     
     * Browse - Available plugins/applications
     * Installed - User's purchased/installed items
     * My Purchases - Purchase history, licenses
     * Developer Portal - For plugin creators (if applicable)
     * 
     * */ 
    {index: 5, name: "Marketplace", icon: <SiMarketo/>, path: "", hasDropDown: false},
    /**
     * The Drop down bar for Reports will include
     * 
     * System Reports Automated health reports, export functionality
     * Securtiy Reports - Compliance Vulnerability summaries
     * Usage Analytics Resource Consumption trends
     * Customer Reports User Defined reporting templates
     * 
    */
    {index: 6, name: "Reports", icon: <TbReport/>, path: "", hasDropDown: false},
    /**
     * The Dropdown bar for Supports will include
     * 
     * Tickets - Support Request management
     * Documenation Built in docs tutotirals
     * Community- Forums Knowledge base
     * Contact - Direct Support Channels
    */
    {index: 7, name: "Supports", icon: <MdContactSupport/>, path: "", hasDropDown: false},
    /**
     * The Dropdown bar for setting will include:
     * 
     * System Configuration - Core Platform settings
     * User Management - Account setting team members
     * Intergrations Third Party service Connections
     * Backup and Recovery Automated backup configuartions
     * License & Billing Subscription management
     * 
    */
    {index: 8, name: "Settings", icon: <VscSettingsGear/>, path: "", hasDropDown: false},
    /**
     * The dropdown to profile will include:
     * 
     * Account Settings
     * API KEYS {Generator/Keys}
     * Notification Prefernces
     * Logout
    */
    {index: 9, name: "Profile", icon: <GiPlagueDoctorProfile/>, path: "", hasDropDown: false},
  ]
  return (
    <div>MainNavbar</div>
  )
}
