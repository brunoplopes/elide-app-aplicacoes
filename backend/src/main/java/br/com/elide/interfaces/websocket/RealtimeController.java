package br.com.elide.interfaces.websocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
public class RealtimeController {
    @MessageMapping("/courier-location")
    @SendTo("/topic/orders")
    public Map<String, Object> courierLocation(Map<String, Object> location) {
        return location;
    }
}

