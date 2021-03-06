import {Container, Shape, Stage, Text, Ticker} from "@createjs/easeljs";
import {GraphicConfig} from "./GraphicConfig";
import {StrColors} from "./StrConsts";

/*+
 * カードのレンダリング用ラス
 */
export class Card extends Container {

    /**
     * @param isOpen {boolean} 表側表示か
     * @param inDeck {boolean} デッキの中にいるか
     */
    constructor(isOpen = false, inDeck = false) {
        super();
        this.isOpen = isOpen;
        this.inDeck = inDeck;

        //外枠
        const frame = new Shape();
        frame.graphics
            .beginStroke(StrColors.WHITE)
            .setStrokeStyle(GraphicConfig.CardFrameThickness)
            .drawRect(0, 0, GraphicConfig.CardWidth, GraphicConfig.CardHeight);
        this.frame = frame;
        this.addChild(frame);

        if (isOpen) {
            this.Opend();
        } else {
            this.Reversed();
        }
    }

    /**
     * カードを表側表示にする
     */
    Opend() {
        //TODO 未実装
    }

    /**
     * カードを裏側表示にする
     */
    Reversed() {
        //TODO 表側を消す処理
        const back = new Shape();
        back.graphics
            .beginFill('Black')
            .setStrokeStyle(GraphicConfig.CardFrameThickness)
            .drawRect(GraphicConfig.CardFrameThickness, GraphicConfig.CardFrameThickness,
                GraphicConfig.CardWidth - (GraphicConfig.CardFrameThickness * 2), GraphicConfig.CardHeight - (GraphicConfig.CardFrameThickness * 2));
        this.back = back;
        this.addChild(back);
    }

    /**
     * 非表示にする　ドローアニメ用
     */
    _Hidden() {
        this.frame.graphics.clear();
        this.back.graphics.clear();
    }
}