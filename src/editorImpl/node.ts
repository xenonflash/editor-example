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
    top: number;
    left: number;
    rotate: number;
}

const defaultNodeOption: NodeOptions = {
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    left: 0,
    rotate: 0,
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
    public name = ''
    private frame = {
        translate: [0, 0],
        rotate: 0,
        transformOrigin: "50% 50%",
    };
    // 尺寸信息
    public width: number
    public height: number
    public anchorX: number
    public anchorY: number
    public rotate: number

    constructor(parent: Moveable, options = defaultNodeOption) {
        Object.assign(defaultNodeOption, options)
        const { draggable, resizable, rotatable, width, height, top, left, rotate } = options
        this.draggable = draggable
        this.resizable = resizable
        this.rotatable = rotatable
        this.id = uuid()
        this.parent = parent
        this.parentEl = parent.el
        const el = document.createElement('div')
        el.style.width = width + 'px'
        el.style.height = height + 'px'
        el.style.background = '#eee'
        el.className = nodeClassName
        el.id = this.id
        el.style.transform = `rotate(${rotate})`
        this.frame.rotate = rotate
        this.el = el
        this.width = width
        this.height = height
        this.left = left
        this.top = top
        this.rotate = rotate
        
        el.addEventListener('click', this.select.bind(this))
    }
    public select(): Node {
        this.parent.currFrame = this.frame
        this.parent.moveableInstance.target = this.el
        this.parent.moveableInstance.draggable = this.draggable
        this.parent.moveableInstance.resizable = this.resizable
        this.parent.moveableInstance.rotatable = this.rotatable
        this.parent.moveableInstance.originDraggable = true
        this.parent.moveableInstance.originDraggableRelative = true
        return this
    }
    public addToParent() {
        this.parentEl.appendChild(this.el)
        this.select()
    }
}
