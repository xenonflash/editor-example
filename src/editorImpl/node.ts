// @ts-nocheck
import Moveable from 'moveable'
import { v1 as uuid }from 'uuid'
import Stage from './stage'
export interface NodeOptions {
    width: number;
    height: number;
    draggable?: boolean;
    resizable?: boolean;
    rotatable?: boolean;
}

const defaultNodeOption: NodeOptions = {
    width: 100,
    height: 100,
    draggable: true,
    resizable: true,
    rotatable: true
}

const nodeClassName = 'editor-node'

export default class Node {
    id
    public parent: Stage
    private parentEl: HTMLElement
    public el: HTMLElement
    public draggable: boolean
    public resizable: boolean
    public rotatable: boolean
    constructor(parent: Moveable, options = defaultNodeOption) {
        this.draggable = options.draggable
        this.resizable = options.resizable
        this.rotatable = options.rotatable
        this.id = uuid()
        this.parent = parent
        this.parentEl = parent.el
        const el = document.createElement('div')
        el.style.width = options.width + 'px'
        el.style.height = options.height + 'px'
        el.className = nodeClassName
        this.el = el
    }
    public select(): Node {
        this.parent.moveableInstance.target = this.el
        this.parent.moveableInstance.draggable = this.draggable
        this.parent.moveableInstance.resizable = this.resizable
        this.parent.moveableInstance.rotatable = this.rotatable
        return this
    }
    public addToParent() {
        this.parentEl.appendChild(this.el)
        this.select()
    }
}