/**
 * Created by serdimoa on 03.03.16.
 */

export interface HeaderInterface {
    HeaderText?: string;
    showText(): string;
}

interface InfoInterface {
    Img?: string;
    Text?: string[];
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
    forEach(f: Function): void;
    map(f: Function): void;
}

export interface NavigationOpenProps {
    active?: boolean;
}

export interface NavigationOpenState {
}

export interface NavigationProps {
}

export interface NavigationState {
    condition?: boolean;
    showMenu?: boolean;
}

export interface HeaderProps {
}

export interface HeaderState {
}

export interface ContentProps {
    // cardClass?: string;
}

export interface ContentState {
}

export interface CardInfoProps {
    cardClass?: ContentInterface;

}

export interface CardInfoState {

}

export interface CardProps {
    Size?: string;
    Title?: string;
    Img?: string;
    Data?: ContentInterface;
    Info?: InfoInterface;
    key?: number;
}

export interface CardState {
}
