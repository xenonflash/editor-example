// @ts-nocheck
import Node from './node'
import { v1 as uuid } from 'uuid'

export interface NodeMap {
    [propName: string]: Node
}

export default class Scene {
    public stage: Stage
    public nodes: NodeMap = {}
    public id: string
    constructor() {
        // this.stage = stage
        this.id = uuid()
    }
}