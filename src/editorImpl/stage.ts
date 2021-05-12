// @ts-nocheck
import Moveable, { MoveableEvents, MoveableOptions } from 'moveable'
import Node from './node'

export interface NodeMap {
    [propName: string]: Node
}

export default class Stage {
    public moveableInstance: any
    private el: HTMLElement
    public nodes: NodeMap = {}
    constructor(el: HTMLElement, options?: Partial<MoveableOptions>) {
        this.moveableInstance = new Moveable(el, options)
        this.el = el
        this.initEvent()
    }
    add(node: Node) {
        this.nodes[node.id] = node
        node.addToParent()
    }
    remove(id: string) {
        this.nodes[id] && this.nodes[id].el.remove()
        delete this.nodes[id]
    }
    selectNode(node: Node) {
        return node.select()
    }
    private initEvent() {
        let frame = {
            translate: [0, 0],
            rotate: 0,
            transformOrigin: "50% 50%",
        };
        this.moveableInstance
            .on("dragOriginStart", (e: MoveableEvents) => {
                e.dragStart && e.dragStart.set(frame.translate);
            })
            .on("dragOrigin", (e: any) => {
                frame.translate = e.drag.beforeTranslate;
                frame.transformOrigin = e.transformOrigin;
            })
            .on("dragStart", (e: any) => {
                e.set(frame.translate);
            })
            .on("drag", (e: any) => {
                frame.translate = e.beforeTranslate;
            })
            .on("rotateStart", (e: any) => {
                e.set(frame.rotate);
            })
            .on("rotate", (e: any) => {
                frame.rotate = e.beforeRotate;
            })
            .on("resizeStart", (e: any) => {
                e.setOrigin(["%", "%"]);
                e.dragStart && e.dragStart.set(frame.translate);
            })
            .on("resize", (e: any) => {
                const beforeTranslate = e.drag.beforeTranslate;
                frame.translate = beforeTranslate;
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            })
            .on("render", (e: any) => {
                const { translate, rotate, transformOrigin } = frame;
                e.target.style.transformOrigin = transformOrigin;
                e.target.style.transform =
                    `translate(${translate[0]}px, ${translate[1]}px)` +
                    ` rotate(${rotate}deg)`;
            });
    }
}