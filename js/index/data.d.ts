/**
 * Created by serdimoa on 03.03.16.
 */
/// <reference path="../../typings/browser.d.ts" />
import * as React from "react";

export interface State extends React.Props<any> {
    DataHeader: string;
    condition: boolean;
    showMenu: boolean;
    DataInfo: ContentInterface[];
}

interface InfoInterface {
    Img?: string;
    Type?: string;
    Phone?: string;
    Time?: string;
    Url?: string;
}

export interface ContentInterface {
    Size?: number;
    Title?: string;
    Img?: string;
    Info?: InfoInterface;
}

export interface NavigationOpenProps extends React.Props<any> {
    active?: boolean;
}

export interface NavigationOpenState extends React.Props<any> {
}

export interface NavigationProps extends React.Props<any> {
    condition?: boolean;
    showMenu?: boolean;
}

export interface NavigationState extends React.Props<any> {
    condition?: boolean;
    showMenu?: boolean;
}

export interface HeaderProps extends React.Props<any> {
    DataHeader: string;
}

export interface HeaderState extends React.Props<any> {
}

export interface ContentProps extends React.Props<any> {
    DataInfo: ContentInterface[];
    // cardClass?: string;
}

export interface ContentState extends React.Props<any> {
    DataInfo: ContentInterface[];
    show: boolean;
    DataInfoOne?: ContentInterface;
}

export interface CardInfoProps extends React.Props<any> {
    open:boolean;
    cardClass?: ContentInterface;
    show?: boolean;
}

export interface CardInfoState extends React.Props<any> {
    open?: boolean;
}

export interface CardProps extends React.Props<any> {
    Size?: string;
    Title?: string;
    Img?: string;
    Data?: ContentInterface;
    Info?: InfoInterface;
    key?: number;
}

export interface CardState extends React.Props<any> {
    open: boolean;
    cardClass?: ContentInterface;
}
